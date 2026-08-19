#!/usr/bin/env python3
"""Generate sample downloadable workout-plan PDFs for the member dashboard demo."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

OUT = "/home/claude/project/pulse-fitness/assets/downloads"
os.makedirs(OUT, exist_ok=True)

VOLT = HexColor("#c4ff1e")
INK = HexColor("#0a0d10")
GREY = HexColor("#6d7c8d")

PLANS = {
    33: {
        "title": "Hypertrophy Block, Phase 2",
        "coach": "Coach Arjun Mehta",
        "days": [
            ("Monday — Lower Body Strength", ["Back Squat — 5x5", "Romanian Deadlift — 4x8", "Walking Lunges — 3x12", "Calf Raises — 3x15"]),
            ("Wednesday — Upper Body Push", ["Bench Press — 5x5", "Overhead Press — 4x8", "Incline DB Press — 3x10", "Tricep Pushdown — 3x15"]),
            ("Friday — Full Body Conditioning", ["Deadlift — 4x6", "Pull-ups — 4xAMRAP", "Kettlebell Swings — 4x20", "Plank — 3x60s"]),
        ],
        "note": "Great job hitting 130kg on squat last week - let's push for 132.5kg x5 on Monday. Keep resting 3 minutes between top sets.",
    },
    32: {
        "title": "Hypertrophy Block, Phase 1",
        "coach": "Coach Arjun Mehta",
        "days": [
            ("Monday — Lower Body Strength", ["Back Squat — 4x6", "Leg Press — 4x10", "Leg Curl — 3x12", "Standing Calf Raise — 3x15"]),
            ("Wednesday — Upper Body Push", ["Bench Press — 4x6", "Seated DB Shoulder Press — 4x10", "Cable Fly — 3x12", "Tricep Dips — 3x12"]),
            ("Friday — Full Body Conditioning", ["Deadlift — 4x6", "Assisted Pull-ups — 4x8", "Farmer's Carry — 4x40m", "Plank — 3x45s"]),
        ],
        "note": "Solid week overall. Focus on bracing your core before every squat rep — filming a set on your phone can help.",
    },
    31: {
        "title": "Strength Foundation",
        "coach": "Coach Arjun Mehta",
        "days": [
            ("Monday — Full Body A", ["Back Squat — 3x8", "Bench Press — 3x8", "Bent-over Row — 3x10", "Plank — 3x30s"]),
            ("Wednesday — Full Body B", ["Deadlift — 3x6", "Overhead Press — 3x8", "Lat Pulldown — 3x10", "Side Plank — 3x30s"]),
            ("Friday — Full Body C", ["Front Squat — 3x8", "Incline Bench Press — 3x8", "Seated Row — 3x10", "Dead Bug — 3x12"]),
        ],
        "note": "Great consistency this month. Time to add load — we'll move to a proper hypertrophy split next cycle.",
    },
    30: {
        "title": "Strength Foundation",
        "coach": "Coach Arjun Mehta",
        "days": [
            ("Monday — Full Body A", ["Goblet Squat — 3x10", "Push-ups — 3x10", "Dumbbell Row — 3x10", "Plank — 3x20s"]),
            ("Wednesday — Full Body B", ["Romanian Deadlift — 3x10", "Seated DB Press — 3x10", "Assisted Pull-up — 3x8", "Side Plank — 3x20s"]),
            ("Friday — Full Body C", ["Leg Press — 3x10", "Incline Push-ups — 3x10", "Cable Row — 3x10", "Dead Bug — 3x10"]),
        ],
        "note": "Welcome to Strength Lab! Focus on clean technique over heavy weight this block — we'll build load steadily.",
    },
}

def draw_plan(week, data):
    path = f"{OUT}/workout-plan-week-{week}.pdf"
    c = canvas.Canvas(path, pagesize=A4)
    w, h = A4

    # header band
    c.setFillColor(INK)
    c.rect(0, h - 30 * mm, w, 30 * mm, fill=1, stroke=0)
    c.setFillColor(VOLT)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(20 * mm, h - 15 * mm, "PULSE")
    c.setFillColor(HexColor("#ffffff"))
    c.setFont("Helvetica", 10)
    c.drawString(20 * mm, h - 21 * mm, "FITNESS STUDIO — MEMBER WORKOUT PLAN")

    y = h - 40 * mm
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(20 * mm, y, f"Week {week} — {data['title']}")
    y -= 7 * mm
    c.setFont("Helvetica", 10)
    c.setFillColor(GREY)
    c.drawString(20 * mm, y, f"Assigned by {data['coach']}  |  Member: Kabir Singh  |  Studio: Camden")
    y -= 12 * mm

    for day_title, exercises in data["days"]:
        c.setFillColor(VOLT)
        c.rect(20 * mm, y - 2 * mm, 4, 6 * mm, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(23 * mm, y, day_title)
        y -= 7 * mm
        c.setFont("Helvetica", 10)
        c.setFillColor(HexColor("#2c343f"))
        for ex in exercises:
            c.drawString(26 * mm, y, f"-  {ex}")
            y -= 5.5 * mm
        y -= 4 * mm

    y -= 4 * mm
    c.setFillColor(HexColor("#f4f6f8"))
    c.roundRect(20 * mm, y - 22 * mm, w - 40 * mm, 20 * mm, 3, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(24 * mm, y - 7 * mm, "Coach's Note")
    c.setFont("Helvetica", 9)
    c.setFillColor(GREY)
    text = c.beginText(24 * mm, y - 13 * mm)
    text.setLeading(12)
    import textwrap
    for line in textwrap.wrap(data["note"], 95):
        text.textLine(line)
    c.drawText(text)

    c.setFont("Helvetica", 8)
    c.setFillColor(GREY)
    c.drawCentredString(w / 2, 12 * mm, "PULSE Fitness Studio · 221 Baker Street, Camden, London NW1 6XE · pulsefitness.studio")

    c.showPage()
    c.save()
    print("wrote", path)

for week, data in PLANS.items():
    draw_plan(week, data)
