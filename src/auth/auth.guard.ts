import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = this.extractTokenFromHeader(request);

    if (!authorization) {
      throw new UnauthorizedException(`Token is required`);
    }

    try {
      const payload = this.jwtService.verify(authorization, {
        secret: process.env.SECRET_KEY,
      });
      request['sub'] = payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }


  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}


// Authorization: Bearer tokenasdav;osfj;dklasd
// split = [Bearer, tokenasdav;osfj;dklasd]