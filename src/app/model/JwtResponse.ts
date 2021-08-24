export class JwtResponse {
  public token: string;
  public name: string;
  public avatar: string;
  public roles: any[];
  constructor(token: string, name: string, avatar: string, roles: any) {
    this.token = token;
    this.name = name;
    this.avatar = avatar;
    this.roles = roles;
  }
}
