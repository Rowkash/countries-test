import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CountriesModule } from './countries/countries.module'

@Module({
	imports: [ConfigModule.forRoot(), CountriesModule],
	controllers: [],
	providers: []
})
export class AppModule {}
