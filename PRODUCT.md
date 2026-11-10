# Product: Kortex

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The implemented Spanish-language site addresses companies in Chile evaluating business software, web development and custom solutions. Specific customer segments remain unconfirmed.

## Product Purpose

Present the agency's services and projects and collect enquiries through the lead form. Kortex is the identity requested for this redesign.

## Operating Context

Visitors explore solutions, review the portfolio and request contact or a demonstration. Product and plan links carry enquiry context into the contact route. Services and projects have API-backed catalogue routes; leads are submitted to the backend.

## Capabilities and Constraints

- Preserve Clean Architecture: presentation depends on application and domain; infrastructure implements domain contracts. Concrete adapters are wired in composition roots.
- React, Vite and TypeScript frontend; Express, Prisma and PostgreSQL backend in npm workspaces. See README.md for startup and API routes.
- The home product categories and plan descriptions are editorial presentation content, not API catalogue records or confirmed commercial terms.
- The contact form has validation, sending, success and failure states. Successful submission requires the API and database.
- Pricing, contractual plan scope, customer endorsements, customer logos, direct email and phone details are unconfirmed. The implementation uses enquiry language and explicit placeholders.
- Free-demo language is present in the requested marketing treatment; operational availability needs business confirmation.

## Brand Commitments

Kortex; Spanish copy; a warm, light and professional interface inspired by Apple Design principles. This direction supersedes the original dark/cyan/pink reference at the user’s request. Visual rules live in DESIGN.md.

## Evidence on Hand

README.md documents services, projects and leads APIs. `frontend/src/presentation/content/home.ts` contains editorial categories, process steps and plan descriptions. The home portfolio reads real project data when available and otherwise exposes placeholders. Review cards and logo spaces are placeholders, not evidence of customer relationships or ratings.

## Product Principles

- Keep enquiries connected to the existing lead use case.
- Separate presentation content from domain rules and data access.
- Publish business claims only with supporting evidence.
