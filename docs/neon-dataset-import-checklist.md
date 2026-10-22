# Neon PostgreSQL dataset import checklist

This document tracks the steps required to safely import the Med IQ medicine dataset into Neon PostgreSQL.

## Preparation

1. Inspect `backend/prisma/schema.prisma` and existing migrations.
2. Extract and validate the supplied dataset ZIP and its README before writing any records.
3. Use a dedicated Neon development branch/database, not production.
4. Configure `DATABASE_URL` as a secret. Never commit credentials.

## Import requirements

- Validate CSV headers, types, duplicate keys, and relationships.
- Import medicines by unique SKU with idempotent upserts.
- Keep synthetic vendors, inventory, demand history, and orders isolated from live business records.
- Do not create fabricated verified vendors, real payments, or completed orders.
- Preserve price units: catalog `priceCents` is paise; forecasting `price` may be INR.
- Support dry-run validation before any database writes.
- Do not reset or destructively synchronize a populated database.

## Verification

- Reconcile actual row counts with the dataset manifest.
- Re-run the importer and verify no duplicates.
- Test medicine API responses and frontend catalog search.
- Run project lint, type checks, and tests.
- Document any skipped records and blockers.

> This checklist is documentation only. It does not mean a dataset was imported or a Neon database was connected.
