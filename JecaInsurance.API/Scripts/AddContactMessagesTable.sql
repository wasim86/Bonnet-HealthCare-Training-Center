-- =====================================================
-- Add ContactMessages Table for Contact Form Submissions
-- =====================================================

-- Create ContactMessages table
CREATE TABLE ContactMessages (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    ContactNumber NVARCHAR(100) NOT NULL,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(20) NULL,
    Subject NVARCHAR(200) NOT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    InquiryType NVARCHAR(50) NULL,
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    UpdatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'New',
    ProcessedDate DATETIME2 NULL,
    ProcessingNotes NVARCHAR(1000) NULL,
    AssignedTo NVARCHAR(100) NULL
);

-- Create indexes for performance
CREATE UNIQUE INDEX IX_ContactMessages_ContactNumber ON ContactMessages(ContactNumber);
CREATE INDEX IX_ContactMessages_Email ON ContactMessages(Email);
CREATE INDEX IX_ContactMessages_CreatedDate ON ContactMessages(CreatedDate);
CREATE INDEX IX_ContactMessages_Status ON ContactMessages(Status);
CREATE INDEX IX_ContactMessages_FirstName_LastName ON ContactMessages(FirstName, LastName);
CREATE INDEX IX_ContactMessages_InquiryType ON ContactMessages(InquiryType);
CREATE INDEX IX_ContactMessages_ProcessedDate ON ContactMessages(ProcessedDate);

-- Add check constraints
ALTER TABLE ContactMessages 
ADD CONSTRAINT CK_ContactMessages_Status 
CHECK (Status IN ('New', 'In Progress', 'Resolved', 'Closed', 'Escalated'));

ALTER TABLE ContactMessages 
ADD CONSTRAINT CK_ContactMessages_InquiryType 
CHECK (InquiryType IS NULL OR InquiryType IN ('General Inquiry', 'Quote Request', 'Claim Question', 'Policy Question', 'Billing Question', 'Technical Support', 'Complaint', 'Compliment'));

-- Insert sample inquiry types for reference
PRINT 'ContactMessages table created successfully with indexes and constraints.';
PRINT 'Available Status values: New, In Progress, Resolved, Closed, Escalated';
PRINT 'Available InquiryType values: General Inquiry, Quote Request, Claim Question, Policy Question, Billing Question, Technical Support, Complaint, Compliment';
