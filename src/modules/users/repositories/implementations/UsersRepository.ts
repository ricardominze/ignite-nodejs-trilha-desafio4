import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    Object.assign(user, {
      name,
      email,
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const indexUser = this.users.findIndex(
      (user) => user.id === receivedUser.id
    );
    if (indexUser === -1) {
      throw new Error("User is not found!");
    }
    const { id, name, email, created_at, updated_at } = receivedUser;
    const updatedUser = new User();
    updatedUser.id = id;
    updatedUser.name = name;
    updatedUser.admin = true;
    updatedUser.email = email;
    updatedUser.created_at = created_at;
    updatedUser.updated_at = updated_at;
    this.users[indexUser] = updatedUser;
    return updatedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
