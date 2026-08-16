# Project Submission Report

## 1. Student Details
**Full Name:** Ryan Matu Rob
**GitHub Username:** RyanMatuRob
**Email:** ryan.rob@strathmore.edu

## 2. Deployed Project Link
**Live GitHub Pages URL:** https://is-project-2026.github.io/paws-clinic-169423/

## 3. Reflection 

### A. Your Best Commit
**Commit URL:** https://github.com/IS-PROJECT-2026/paws-clinic-169423/commit/b4694ae1c74dba5a431989ae1963d16170bfe991
**Why this one?** This commit clearly follows the Conventional Commits specification. The `feat:` type accurately categorizes the addition of the new UI section, the subject line is concise, and the body provides exact context on what the code achieves while properly closing Issue #5.

### B. A Mistake or Struggle
**Link to the evidence:** https://github.com/IS-PROJECT-2026/paws-clinic-169423/commit/2dbcd294a4093d502d3e0c0bca3ca8c06e0a4123
**What happened and how did you recover?** When setting up the third conflict I failed to recall that we had to make changes from branches other than main thus I ended up merging the branches the first round ,and had to restart creating the conflict all over  again.

### C. A Pull Request You're Proud Of
**PR URL:** https://github.com/IS-PROJECT-2026/paws-clinic-169423/commit/63089422c2dbdd1fd914b601560b1534fabb458b
**What did you check before merging?** I utilized the "Files changed" tab to perform a self-review, verifying that only the files relevant to the mobile menu/modal were modified. I also ensured the PR description automatically linked to the issue using the "Closes #X" syntax for full traceability.

### D. One Thing You Would Do Differently
**What would you change?** If I restarted, I would define my CSS custom properties (variables) much earlier in the Kanban planning phase as a dedicated chore issue, rather than establishing them while building the first feature. This would streamline styling across branches.
**Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/paws-clinic-169423/commit/65d55b0c11719356b6305b0144fd15f5385f9460

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
<img width="739" height="252" alt="milestones" src="https://github.com/user-attachments/assets/2c317621-7610-44c2-bbff-7ca4213d55f5" />

**Caption:** Active milestones broken down into granular tracking issues.

### B. Project Board
<img width="840" height="361" alt="kanban" src="https://github.com/user-attachments/assets/35bf7653-1e81-4435-bece-c99d2dd5569c" />

**Caption:** Agile Kanban board demonstrating task progression from To Do to Done.

### C. Branching Architecture
<img width="927" height="406" alt="branches" src="https://github.com/user-attachments/assets/406283d0-e3f6-47e6-8cb6-342af5039774" />


**Caption:** Remote branch list highlighting the use of feat/, fix/, and refactor/ naming conventions.

### D. Pull Requests & Traceability
<img width="224" height="312" alt="clear merging of branches" src="https://github.com/user-attachments/assets/ab24e719-0423-4e1e-b281-6c3e490e8057" />

**Caption:** A completed Pull Request showing a clean merge and automated issue closure.

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology
**What cause did you use?** Concurrent Line Edits (Same file, same line)
**Step 1: Generating the Clash**
<img width="686" height="445" alt="conflict_evidence_1" src="https://github.com/user-attachments/assets/58d50bc7-98bb-4d5a-aac6-96e73f90964d" />

**Caption:** Attempting to merge two branches that modified the `<title>` tag differently.

**Step 2: Resolution & Clean Merge**
<img width="687" height="163" alt="conflict_evidence_1_resolved" src="https://github.com/user-attachments/assets/35b4ec98-399d-437e-b0a1-38e6209246bb" />

**Caption:** Terminal output confirming the successful resolution and clean merge commit.

### Conflict 2 — Different Cause
**What cause did you use?** Modify vs. Delete
**Why does this cause trigger a conflict?** Branch A deleted `services-list.txt` while Branch B attempted to modify its contents. Git cannot automatically decide whether to keep the new edits or honor the deletion.
<img width="697" height="187" alt="conflict_evidence_2" src="https://github.com/user-attachments/assets/e56ed7ee-abcc-4fdd-99fa-80dabd7aa6fb" />
<img width="690" height="443" alt="conflict_evidence2_resolved" src="https://github.com/user-attachments/assets/b866b8df-40ce-414d-b0c5-2aebf25fd3ef" />
**Caption:** Terminal warning showing the modify/delete conflict.

### Conflict 3 — Different Cause
**What cause did you use?** Add vs. Add (Concurrent Creation)
**Why does this cause trigger a conflict?** Two isolated branches independently created a new file with the exact same name (`settings.txt`) but with different contents. Git requires manual intervention to determine which version of the newly added file to retain.
<img width="916" height="446" alt="conflict_evidence_3" src="https://github.com/user-attachments/assets/34173d81-2a4c-4e46-a161-f4a89594f3e8" />

**Caption:** Terminal warning showing the add/add collision.
