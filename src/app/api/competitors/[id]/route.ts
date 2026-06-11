import { NextResponse } from "next/server";
import { MOCK_COMPETITORS } from '@/lib/data';

export async function GET({ params }) {
  const id = parseInt(params.id);
  const competitor = MOCK_COMPETITORS.find((c) => c.price === id);
  if (!competitor) {
    return NextResponse.json({ error: "Competitor not found" }, {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return NextResponse.json(competitor, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH({ params, request }) {
  const id = parseInt(params.id);
  const competitor = MOCK_COMPETITORS.find((c) => c.price === id);
  if (!competitor) {
    return NextResponse.json({ error: "Competitor not found" }, {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const { competitorName, url, planName, price } = await request.json();
  competitor.competitorName = competitorName;
  competitor.url = url;
  competitor.planName = planName;
  competitor.price = price;
  return NextResponse.json(competitor, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE({ params }) {
  const id = parseInt(params.id);
  const competitor = MOCK_COMPETITORS.find((c) => c.price === id);
  if (!competitor) {
    return NextResponse.json({ error: "Competitor not found" }, {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  MOCK_COMPETITORS.splice(MOCK_COMPETITORS.indexOf(competitor), 1);
  return NextResponse.json({ message: "Competitor deleted" }, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}