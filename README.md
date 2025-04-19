``` mermaid
---
config:
  theme: base
---
erDiagram
    User ||--o{ Resume : creates
    User ||--o{ Application : submits
    User ||--o{ Document : uploads
    User ||--o{ Feedback : provides
    User ||--o{ Notification : receives
    Resume ||--o| Application : used_in
    Application ||--o| Interview : has
    Application ||--o{ Document : contains
    Document ||--o{ Feedback : receives
    Feedback }o--|| User : provided_by
    User {
        int UserID PK
        string Email UK
        string Password
        string Role
        string FullName
        string Phone
        datetime CreatedAt
    }
    Resume {
        int ResumeID PK
        int UserID FK
        string Title
        string Education
        string Experience
        string Skills
        string Type
        datetime CreatedAt
    }
    Application {
        int ApplicationID PK
        int ResumeID FK
        int UserID FK
        string Status
        datetime CreatedAt
        datetime UpdatedAt
    }
    Interview {
        int InterviewID PK
        int ApplicationID FK
        datetime DateTime
        string Location
        string Status
        datetime CreatedAt
    }
    Document {
        int DocumentID PK
        int ApplicationID FK
        int UserID FK
        string FilePath
        string DocumentType 
        string Status 
        datetime CreatedAt
        datetime UpdatedAt
    }
    Feedback {
        int FeedbackID PK
        int DocumentID FK
        int EmployeeID FK
        string Comment
        datetime CreatedAt
    }
    Notification {
        int NotificationID PK
        int UserID FK
        string Message
        string Type 
        boolean IsRead
        datetime CreatedAt
    }


```
