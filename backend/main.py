from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CalmAndAdaptiveTradingSystem API")

# CORS - to be configured with deployed frontend domain in env NEXT_PUBLIC_FRONTEND_URL
app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)


@app.get("/")
def read_root() -> dict[str, str]:
	return {"message": "CalmAndAdaptiveTradingSystem API"}


@app.get("/health")
def health() -> dict[str, str]:
	return {"status": "healthy"}


