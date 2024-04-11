e2e:
	docker compose up -d --build
	npx playwright install --with-deps
	npx playwright test
	docker compose down

