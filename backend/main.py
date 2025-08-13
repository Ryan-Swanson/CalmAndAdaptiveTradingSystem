from fastapi import FastAPI

app = FastAPI(title="CalmAndAdaptiveTradingSystem API")


@app.get("/")
def read_root() -> dict[str, str]:
	return {"message": "CalmAndAdaptiveTradingSystem API"}


@app.get("/healthz")
def healthcheck() -> dict[str, str]:
	return {"status": "ok"}


