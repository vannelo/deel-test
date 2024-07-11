import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000"
    );
    return NextResponse.json(response.data.results);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Pokémon list" },
      { status: 500 }
    );
  }
}
