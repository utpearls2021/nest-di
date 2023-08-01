import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from 'src/disk/disk.service';
@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService]
})
export class CpuModule {}
