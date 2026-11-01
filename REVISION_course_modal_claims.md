# Revision: make the course modal claims evidence-based

## Why

The "Prepares them for internships as" list was built from the full occupational
taxonomy for each course, not from Suffolk's actual postings. Five of the eleven
card courses named at least one role that appears **zero times** in the data:

| Course | Claimed but absent from the postings |
|---|---|
| STATS-250 | biostatistician, claims analyst, underwriter |
| EC-311 | health services analyst, compensation and benefits analyst, regulatory analyst |
| EC-421 | tax examiner, revenue analyst |
| EC-151 | cartographer, geographer |
| EC-483 | loan officer |

A faculty member who checks will find the claim unsupported. The "And in these
settings" line has a milder version of the same problem: EC-311 claimed antitrust
and hospital strategy work, while its actual employers are the MBTA, National
Grid, the Fed, and CBO.

The fix is not to hedge the wording. It is to derive both lines from the postings,
so the modal describes evidence sitting one click away instead of making a claim.

## What changes

Two headings and the `prep` block. Nothing else.

### 1. Data

`prep` in `jobdata.json` has been regenerated for all eleven card courses. Each
entry now holds:

- `roles` — the occupational classifications carried by postings tagged to that
  course, most frequent first, limited to those appearing at least twice
- `fields` — up to six distinct employers from those postings, nearest first
- `n` — how many postings are tagged to the course

The seven non-card courses keep their original `prep` entries, so nothing breaks
if a card is added for one later.

Use the `jobdata.json` supplied alongside this file. It is the complete data
block, already carrying the 100 undergraduate-eligible postings.

### 2. Two headings in `courseModal()`

```js
if (pr.roles)  h += "<h4>Roles these postings are classified as</h4><p>" + esc(pr.roles) + "</p>";
if (pr.fields) h += "<h4>Employers in this set</h4><p>" + esc(pr.fields) + "</p>";
```

Replacing:

```js
if (pr.roles)  h += "<h4>Prepares them for internships as</h4><p>" + esc(pr.roles) + "</p>";
if (pr.fields) h += "<h4>And in these settings</h4><p>" + esc(pr.fields) + "</p>";
```

## What it reads like afterwards

STATS-250, which was the worst case:

> **Roles these postings are classified as**
> economist, data scientist, data analyst, actuary, and statistician
>
> **Employers in this set**
> Oliver Wyman, AmTrust Insurance, Liberty Mutual Insurance, OptiRTC, Citizens,
> and Zurich North America

EC-483:

> **Roles these postings are classified as**
> investment banking and trading analyst, financial and investment analyst,
> investment fund analyst, financial risk analyst, and wealth management analyst
>
> **Employers in this set**
> Federal Home Loan Bank of Boston, Brown Brothers Harriman, M3 Family Office,
> Loomis, Sayles and Company, Moors & Cabot, and Federal Reserve Bank of Boston

## Verification

- Open STATS-250. The word "biostatistician" does not appear.
- Open EC-311. It reads economist first, not health services analyst.
- Every card course shows both headings with content, and the employer line names
  real organisations rather than categories.
- EC-151 shows three roles rather than five. That is correct; only three occur
  more than once in its postings.
