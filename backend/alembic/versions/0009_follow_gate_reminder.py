"""follow_gate_reminder_message on campaign

Revision ID: 0009
Revises: 0008
Create Date: 2026-11-26 12:55:00.000000
"""

from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

revision: str = "0009"
down_revision: str | None = "0008"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.add_column(
        "campaign",
        sa.Column("follow_gate_reminder_message", sa.Text(), nullable=True),
    )


def downgrade() -> None:
    op.drop_column("campaign", "follow_gate_reminder_message")
