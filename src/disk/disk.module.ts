import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';
@Module({
  exports: [DiskService],
  imports:[PowerModule],
  providers: [DiskService]

})
export class DiskModule {}
