import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const usersAlreadyExists = this.usersRepository.findByEmail(email);
    if (usersAlreadyExists) {
      throw new Error("User Already exists!");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
