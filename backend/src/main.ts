import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	const PORT = configService.get('PORT')

	app.setGlobalPrefix('api')

	// ---------- Cors config ---------- //

	app.enableCors()

	await app.listen(PORT, () => console.log(`App started on port ${PORT}`))
}
bootstrap()
