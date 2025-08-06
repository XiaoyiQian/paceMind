# backend/src/routes/auth.py
from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login(): ...

@router.post("/register")
def register(): ...

@router.post("/logout")
def logout(): ...