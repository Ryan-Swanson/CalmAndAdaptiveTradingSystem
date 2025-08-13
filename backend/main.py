from fastapi import FastAPI

app = FastAPI(title="CalmAndAdaptiveTradingSystem API")


@app.get("/")
def read_root() -> dict[str, str]:
	return {"message": "CalmAndAdaptiveTradingSystem API"}


@app.get("/health")
def health() -> dict[str, str]:
	return {"status": "healthy"}


