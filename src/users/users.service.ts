import * as uuid from 'uuid';
import { EmailService } from 'src/email/email.service';

export class UsersService {
  constructor(private emailService: EmailService) {}
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email); // 가입하려는 유저가 존재하는지 검사함

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken); // 유저를 DB에 저장
    await this.sendMemberJoinEmail(email, signupVerifyToken); // 회원가입 인증 이메일을 발송
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(
    name: string,
    eamil: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // TODO: DB 연동 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    throw new Error('Method not implemented.');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO

    throw new Error('Method not implemented.');
  }

  async getUserInof(userId: string): Promise<UserInfo> {
    // TODO

    throw new Error('Method not implemented.');
  }
}
