import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY || '',
      signOptions: { expiresIn: '86400s' },
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, AuthModule, JwtModule], 
  exports: [AuthGuard, AuthService, AuthModule],   
})
export class AuthModule {}
