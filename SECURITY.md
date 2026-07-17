# Security Policy

## Overview

This project follows security-first development practices.

Security is considered during architecture, implementation and deployment.

---

## Supported Versions

| Version | Supported |
|----------|-----------|
| main     | ✅ |

---

## Reporting a Vulnerability

If you discover a security vulnerability, please do not create a public issue.

Instead, contact the project maintainer privately.

Include:

- Description
- Steps to reproduce
- Impact
- Possible fix (optional)

---

## Security Principles

- Never commit secrets.
- Never expose API keys.
- Environment variables must remain outside version control.
- All user input must be validated.
- Prefer Server Components whenever possible.
- Sensitive logic must remain on the server.

---

## Authentication

Authentication and authorization must never rely solely on middleware.

Protected routes must validate the user on the server.

---

## Dependencies

Dependencies should be kept up to date.

Security advisories should be reviewed before each release.

---

## Environment Variables

Sensitive values must be stored only in:

.env.local

Never commit:

.env
.env.production
.env.local

---

## Third-party Services

This project currently integrates with:

- Sanity CMS
- Resend
- Vercel
- PostHog
- Sentry

Every external service must use the minimum required permissions.

---

## Security Checklist

Before each production deployment:

- [ ] No secrets committed
- [ ] Environment variables configured
- [ ] Dependencies updated
- [ ] No high severity vulnerabilities
- [ ] CSP reviewed
- [ ] Rate limiting enabled where required
- [ ] Forms validated
- [ ] Headers configured
- [ ] HTTPS enabled

---

## Responsible Disclosure

Please report vulnerabilities responsibly.

Do not publicly disclose security issues until they have been addressed.