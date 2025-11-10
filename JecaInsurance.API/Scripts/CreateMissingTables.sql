-- =====================================================
-- CREATE MISSING TABLES FOR JECA INSURANCE DATABASE
-- These tables are referenced in the DbContext but missing from the main schema
-- =====================================================

-- Policy Reviews Table
CREATE TABLE PolicyReviews (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    ReviewNumber NVARCHAR(100) NOT NULL UNIQUE,
    ReviewMethod NVARCHAR(50) NOT NULL,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    DiscussionTopics NVARCHAR(2000),
    InformationSecure BIT NOT NULL DEFAULT 0,
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    UpdatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'Requested',
    ScheduledDate DATETIME2,
    Notes NVARCHAR(500),
    
    INDEX IX_PolicyReviews_ReviewMethod (ReviewMethod),
    INDEX IX_PolicyReviews_Email (Email),
    INDEX IX_PolicyReviews_CreatedDate (CreatedDate),
    INDEX IX_PolicyReviews_Status (Status),
    INDEX IX_PolicyReviews_ReviewNumber (ReviewNumber),
    INDEX IX_PolicyReviews_FirstName_LastName (FirstName, LastName),
    INDEX IX_PolicyReviews_ScheduledDate (ScheduledDate)
);

-- Claims Table
CREATE TABLE Claims (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    ClaimNumber NVARCHAR(100) NOT NULL UNIQUE,
    PolicyNumber NVARCHAR(100) NOT NULL,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    DateOfLoss DATE NOT NULL,
    ClaimDescription NVARCHAR(2000) NOT NULL,
    InformationSecure BIT NOT NULL DEFAULT 0,
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    UpdatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'Submitted',
    
    INDEX IX_Claims_ClaimNumber (ClaimNumber),
    INDEX IX_Claims_PolicyNumber (PolicyNumber),
    INDEX IX_Claims_Email (Email),
    INDEX IX_Claims_CreatedDate (CreatedDate),
    INDEX IX_Claims_Status (Status),
    INDEX IX_Claims_FirstName_LastName (FirstName, LastName),
    INDEX IX_Claims_DateOfLoss (DateOfLoss)
);

-- Consultations Table
CREATE TABLE Consultations (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    ConsultationNumber NVARCHAR(100) NOT NULL UNIQUE,
    ConsultationType NVARCHAR(50) NOT NULL,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    PreferredContactMethod NVARCHAR(50),
    Disc