-- =====================================================
-- JECA INSURANCE DATABASE SCHEMA
-- SQL Server with Entity Framework Core Support
-- =====================================================

-- Base Quote Table (Common fields for all quote types)
CREATE TABLE Quotes (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    QuoteType NVARCHAR(50) NOT NULL,
    QuoteNumber NVARCHAR(20) NOT NULL UNIQUE,
    
    -- Contact Information (from Additional Forms or main forms)
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    Address NVARCHAR(255),
    City NVARCHAR(100),
    State NVARCHAR(50),
    ZipCode NVARCHAR(20),
    Country NVARCHAR(100),
    
    -- Insurance History (from AdditionalInformationForm)
    CurrentInsuranceCompany NVARCHAR(100),
    ContinuousCoverage NVARCHAR(50),
    PolicyExpiresIn NVARCHAR(50),
    ClaimsIn3Years NVARCHAR(10),
    TicketsIn3Years NVARCHAR(10),
    CoverageDesired NVARCHAR(50),
    WhenToStart NVARCHAR(100),
    
    -- Common Fields
    AdditionalComments NTEXT,
    InformationSecure BIT NOT NULL DEFAULT 0,
    
    -- Audit Fields
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    UpdatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    
    -- Indexes
    INDEX IX_Quotes_QuoteType (QuoteType),
    INDEX IX_Quotes_Email (Email),
    INDEX IX_Quotes_CreatedDate (CreatedDate),
    INDEX IX_Quotes_Status (Status)
)

-- Auto Insurance Quotes
CREATE TABLE AutoQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    -- Auto-specific fields from AdditionalInformationForm
    -- (Most auto-specific data is in Vehicles and Drivers tables)
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Vehicles Table (for Auto, Boat, Motorcycle)
CREATE TABLE Vehicles (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    QuoteId UNIQUEIDENTIFIER NOT NULL,
    VehicleType NVARCHAR(20) NOT NULL, -- 'Auto', 'Boat', 'Motorcycle'
    IsPrimary BIT NOT NULL DEFAULT 0,
    
    -- Common Vehicle Fields
    Year NVARCHAR(10) NOT NULL,
    Make NVARCHAR(100) NOT NULL,
    Model NVARCHAR(100) NOT NULL,
    
    -- Auto/Motorcycle Specific
    DriveToWorkSchool NVARCHAR(10),
    IsLeased NVARCHAR(10),
    WorkSchoolDistance NVARCHAR(50),
    CollisionDeductible NVARCHAR(50),
    AnnualMileage NVARCHAR(50),
    ComprehensiveDeductible NVARCHAR(50),
    MoreThanTwoVehicles NVARCHAR(10),
    
    -- Boat Specific
    Manufacturer NVARCHAR(100),
    WatercraftType NVARCHAR(50),
    Length NVARCHAR(20),
    BoatUse NVARCHAR(50),
    MarketValue NVARCHAR(50),
    NumberOfEngines NVARCHAR(10),
    TotalHorsepower NVARCHAR(20),
    EngineType NVARCHAR(50),
    Deductible NVARCHAR(50),
    HullMaterial NVARCHAR(50),
    TrailerCoverage NVARCHAR(10),
    StorageLocation NVARCHAR(50),
    StructuralModifications NVARCHAR(500),
    
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE,
    INDEX IX_Vehicles_QuoteId (QuoteId),
    INDEX IX_Vehicles_VehicleType (VehicleType)
)

-- Drivers/Operators Table (for Auto, Boat, Motorcycle)
CREATE TABLE Drivers (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    QuoteId UNIQUEIDENTIFIER NOT NULL,
    DriverType NVARCHAR(20) NOT NULL, -- 'Auto', 'Boat', 'Motorcycle'
    IsPrimary BIT NOT NULL DEFAULT 0,
    
    -- Common Driver Fields
    Name NVARCHAR(200) NOT NULL,
    Gender NVARCHAR(10) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Married NVARCHAR(10) NOT NULL,
    
    -- Auto Driver Specific
    Status NVARCHAR(50), -- 'Employed', 'Student', 'Retired', 'Other'
    
    -- Boat Operator Specific
    AccidentsTickets NVARCHAR(10), -- '0', '1', '2', '3', '4+'
    
    CreatedDate DATETIME2 NOT NULL DEFAULT GETDATE(),
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE,
    INDEX IX_Drivers_QuoteId (QuoteId),
    INDEX IX_Drivers_DriverType (DriverType)
)

-- Home Insurance Quotes
CREATE TABLE HomeQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    -- Building Information
    HomeType NVARCHAR(100) NOT NULL,
    YearBuilt NVARCHAR(10) NOT NULL,
    SquareFootage NVARCHAR(20) NOT NULL,
    ConstructionType NVARCHAR(100) NOT NULL,
    PrimaryHeating NVARCHAR(100) NOT NULL,
    Foundation NVARCHAR(100) NOT NULL,
    Bedrooms NVARCHAR(10) NOT NULL,
    RoofType NVARCHAR(100) NOT NULL,
    Bathrooms NVARCHAR(10) NOT NULL,
    RoofAge NVARCHAR(20) NOT NULL,
    Stories NVARCHAR(10) NOT NULL,
    GarageType NVARCHAR(100) NOT NULL,
    
    -- Property Features (Boolean fields)
    DeadBolts BIT NOT NULL DEFAULT 0,
    FireExtinguishers BIT NOT NULL DEFAULT 0,
    Trampoline BIT NOT NULL DEFAULT 0,
    CoveredDeckPatio BIT NOT NULL DEFAULT 0,
    SwimmingPool BIT NOT NULL DEFAULT 0,
    
    -- Location & Safety
    FloodPlan NVARCHAR(100) NOT NULL,
    SecuritySystem NVARCHAR(100) NOT NULL,
    MunicipalLocation NVARCHAR(100) NOT NULL,
    FireAlarm NVARCHAR(100) NOT NULL,
    DogBreeds NVARCHAR(200),
    
    -- Policy Information
    ReplacementCost NVARCHAR(50) NOT NULL,
    PersonalLiability NVARCHAR(50) NOT NULL,
    DesiredDeductible NVARCHAR(50) NOT NULL,
    CreditRating NVARCHAR(50) NOT NULL,
    ReportedClaims NVARCHAR(50) NOT NULL,
    ReplaceExistingPolicy NVARCHAR(50) NOT NULL,
    PolicyStartDate DATE NOT NULL,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Flood Insurance Quotes
CREATE TABLE FloodQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    -- Property Information
    PolicyOwner NVARCHAR(100) NOT NULL,
    HomeType NVARCHAR(100) NOT NULL,
    BuildingPurpose NVARCHAR(100) NOT NULL,
    RentingHome NVARCHAR(50) NOT NULL,
    FloodClaims NVARCHAR(50) NOT NULL,
    
    -- Coverage Information
    DesiredContents NVARCHAR(50) NOT NULL,
    DesiredBuilding NVARCHAR(50) NOT NULL,
    
    -- Additional Information
    Comments NTEXT,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Renters Insurance Quotes
CREATE TABLE RentersQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    -- Property Information
    TypeOfHome NVARCHAR(100) NOT NULL,
    EstimatedSquareFootage NVARCHAR(20) NOT NULL,
    TotalNumberOfRooms NVARCHAR(10) NOT NULL,
    DogBreeds NVARCHAR(200),
    
    -- Property Features (Boolean fields)
    DeadBolts BIT NOT NULL DEFAULT 0,
    FireExtinguishers BIT NOT NULL DEFAULT 0,
    Trampoline BIT NOT NULL DEFAULT 0,
    CoveredDeckPatio BIT NOT NULL DEFAULT 0,
    SwimmingPool BIT NOT NULL DEFAULT 0,
    
    -- Policy Information
    ReplacementValue NVARCHAR(50) NOT NULL,
    PersonalLiabilityCoverage NVARCHAR(50) NOT NULL,
    DesiredDeductible NVARCHAR(50) NOT NULL,
    CreditRating NVARCHAR(50) NOT NULL,
    ReportedClaims NVARCHAR(50) NOT NULL,
    ReplaceExistingPolicy NVARCHAR(50) NOT NULL,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Landlords Insurance Quotes
CREATE TABLE LandlordsQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    NumberOfUnits NVARCHAR(10) NOT NULL,
    TotalSquareFeet NVARCHAR(20) NOT NULL,
    Message NTEXT,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Business Insurance Quotes
CREATE TABLE BusinessQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    -- Business Information
    BusinessName NVARCHAR(200) NOT NULL,
    YearsInBusiness NVARCHAR(20) NOT NULL,
    LegalEntity NVARCHAR(100) NOT NULL,
    PartnersOwners NVARCHAR(100) NOT NULL,
    FullTimeEmployees NVARCHAR(20) NOT NULL,
    PartTimeEmployees NVARCHAR(20) NOT NULL,
    SubContractors NVARCHAR(20) NOT NULL,
    OneTimeOrSeasonal NVARCHAR(100) NOT NULL,
    AnnualRevenue NVARCHAR(100) NOT NULL,
    ReplaceExistingPolicy NVARCHAR(50) NOT NULL,
    BusinessDescription NTEXT NOT NULL,
    
    -- Insurance Types (Boolean fields)
    GeneralLiability BIT NOT NULL DEFAULT 0,
    CommercialAuto BIT NOT NULL DEFAULT 0,
    CommercialProperty BIT NOT NULL DEFAULT 0,
    CyberLiability BIT NOT NULL DEFAULT 0,
    ProfessionalLiability BIT NOT NULL DEFAULT 0,
    DirectorsOfficersLiability BIT NOT NULL DEFAULT 0,
    BusinessOwnersPackage BIT NOT NULL DEFAULT 0,
    WorkersCompensation BIT NOT NULL DEFAULT 0,
    CommercialCrime BIT NOT NULL DEFAULT 0,
    GroupHealthInsurance BIT NOT NULL DEFAULT 0,
    GroupLifeInsurance BIT NOT NULL DEFAULT 0,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Business Owner Package (BOP) Quotes
CREATE TABLE BOPQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    
    BusinessName NVARCHAR(200) NOT NULL,
    BusinessDescription NTEXT NOT NULL,
    
    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Workers Compensation Quotes
CREATE TABLE WorkersCompQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    BusinessName NVARCHAR(200) NOT NULL,
    NumberOfEmployees NVARCHAR(20) NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Health Insurance Quotes
CREATE TABLE HealthQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    -- Primary Individual
    Gender NVARCHAR(10) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Smoker NVARCHAR(10) NOT NULL,
    Pregnant NVARCHAR(10) NOT NULL,
    Dependents NVARCHAR(50) NOT NULL,
    AnnualHouseholdIncome NVARCHAR(100) NOT NULL,

    -- Additional Insureds (Spouse)
    SpouseFirstName NVARCHAR(100),
    SpouseLastName NVARCHAR(100),
    SpouseGender NVARCHAR(10),
    SpouseDateOfBirth DATE,
    SpouseSmoker NVARCHAR(10),
    SpousePregnant NVARCHAR(10),

    -- Additional Information
    Message NTEXT,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Dental Insurance Quotes
CREATE TABLE DentalQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    NumberOfPeople NVARCHAR(10) NOT NULL,
    PolicyStartDate DATE NOT NULL,

    -- File Attachment Checkboxes
    DentalRecords BIT NOT NULL DEFAULT 0,
    XrayImages BIT NOT NULL DEFAULT 0,
    TreatmentHistory BIT NOT NULL DEFAULT 0,
    InsuranceCards BIT NOT NULL DEFAULT 0,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Life Insurance Quotes
CREATE TABLE LifeInsuranceQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    -- Coverage Information
    CoverageType NVARCHAR(100) NOT NULL,
    AmountOfCoverage NVARCHAR(100) NOT NULL,
    PolicyStartDate DATE NOT NULL,

    -- Health Information
    Birthdate DATE NOT NULL,
    Height NVARCHAR(20) NOT NULL,
    Weight NVARCHAR(20) NOT NULL,
    Gender NVARCHAR(10) NOT NULL,
    TobaccoUse NVARCHAR(50) NOT NULL,
    MajorDiseases NVARCHAR(200) NOT NULL,
    StrokeHeartAttack NVARCHAR(200) NOT NULL,
    CancerDiagnosis NVARCHAR(200) NOT NULL,
    BusinessHobby NVARCHAR(200) NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Umbrella Insurance Quotes
CREATE TABLE UmbrellaInsuranceQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    -- Risk Assessment
    VehiclesOwned NVARCHAR(50) NOT NULL,
    PropertiesOwned NVARCHAR(50) NOT NULL,
    HouseholdAccidents NVARCHAR(50) NOT NULL,
    AmountOfCoverage NVARCHAR(100) NOT NULL,
    TrafficTickets NVARCHAR(50) NOT NULL,
    PolicyStartDate DATE NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Disability Insurance Quotes
CREATE TABLE DisabilityInsuranceQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    -- Disability Specific
    Occupation NVARCHAR(200) NOT NULL,
    Birthdate DATE NOT NULL,
    MonthlyIncome NVARCHAR(100) NOT NULL,
    Gender NVARCHAR(10) NOT NULL,
    TobaccoUse NVARCHAR(50) NOT NULL,
    PolicyStartDate DATE NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Medicare Advantage Quotes
CREATE TABLE MedicareAdvantageQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    PolicyStartDate DATE NOT NULL,
    DateOfBirth DATE NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Medicare Supplement Quotes
CREATE TABLE MedicareSupplementQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    PolicyStartDate DATE NOT NULL,
    DateOfBirth DATE NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Vision Insurance Quotes
CREATE TABLE VisionQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    NumberOfPeople NVARCHAR(10) NOT NULL,
    PolicyStartDate DATE NOT NULL,

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- Annuity Quotes
CREATE TABLE AnnuityQuotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,

    -- Simple contact form - all data in base Quotes table

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE
)

-- File Attachments Table (for Dental and future forms)
CREATE TABLE FileAttachments (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    QuoteId UNIQUEIDENTIFIER NOT NULL,
    FileName NVARCHAR(255) NOT NULL,
    OriginalFileName NVARCHAR(255) NOT NULL,
    FileSize BIGINT NOT NULL,
    ContentType NVARCHAR(100) NOT NULL,
    FileCategory NVARCHAR(50) NOT NULL, -- 'DentalRecords', 'XrayImages', etc.
    StoragePath NVARCHAR(500) NOT NULL,
    UploadedDate DATETIME2 NOT NULL DEFAULT GETDATE(),

    FOREIGN KEY (QuoteId) REFERENCES Quotes(Id) ON DELETE CASCADE,
    INDEX IX_FileAttachments_QuoteId (QuoteId),
    INDEX IX_FileAttachments_FileCategory (FileCategory)
)

-- =====================================================
-- LOOKUP TABLES FOR DROPDOWN VALUES
-- =====================================================

-- Continuous Coverage Options
CREATE TABLE ContinuousCoverageOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(50) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO ContinuousCoverageOptions (Value, DisplayOrder) VALUES
('3+ Years', 1), ('2 Years', 2), ('1 Year', 3), ('6 Months', 4),
('Under 6 months', 5), ('Not Currently Insured', 6)

-- Policy Expires In Options
CREATE TABLE PolicyExpiresInOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(50) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO PolicyExpiresInOptions (Value, DisplayOrder) VALUES
('Not sure', 1), ('A Few days', 2), ('2 weeks', 3), ('1 Month', 4),
('2 Months', 5), ('3 Months', 6), ('3-6 Months', 7), ('6+ Months', 8)

-- Claims In 3 Years Options
CREATE TABLE ClaimsIn3YearsOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(10) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO ClaimsIn3YearsOptions (Value, DisplayOrder) VALUES
('None', 1), ('1', 2), ('2', 3), ('3', 4), ('4+', 5)

-- Tickets In 3 Years Options
CREATE TABLE TicketsIn3YearsOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(10) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO TicketsIn3YearsOptions (Value, DisplayOrder) VALUES
('None', 1), ('1', 2), ('2', 3), ('3', 4), ('4', 5), ('5', 6), ('6+', 7)

-- Coverage Desired Options
CREATE TABLE CoverageDesiredOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(50) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO CoverageDesiredOptions (Value, DisplayOrder) VALUES
('State Minimum', 1), ('Standard Coverage', 2), ('Premium Coverage', 3)

-- Vehicle-related Lookup Tables
CREATE TABLE WorkSchoolDistanceOptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(50) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO WorkSchoolDistanceOptions (Value, DisplayOrder) VALUES
('Less than 5 Miles', 1), ('5 Miles', 2), ('10 Miles', 3), ('15 Miles', 4),
('20 Miles', 5), ('30 Miles', 6), ('Over 30 Miles', 7), ('N/A', 8)

-- Watercraft Types for Boats
CREATE TABLE WatercraftTypes (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Value NVARCHAR(50) NOT NULL UNIQUE,
    DisplayOrder INT NOT NULL
)

INSERT INTO WatercraftTypes (Value, DisplayOrder) VALUES
('Runaboat', 1), ('Bass Boat', 2), ('Cabin Cruiser', 3), ('Pontoon', 4),
('Sail Boat - Single-Hull', 5), ('Sail Boat - Multi-Hull', 6), ('Houseboat', 7), ('Inflatable', 8)

-- =====================================================
-- INDEXES FOR PERFORMANCE OPTIMIZATION
-- =====================================================

-- Additional indexes for common queries
CREATE INDEX IX_Quotes_QuoteNumber ON Quotes(QuoteNumber)
CREATE INDEX IX_Quotes_FirstName_LastName ON Quotes(FirstName, LastName)
CREATE INDEX IX_Vehicles_Year_Make_Model ON Vehicles(Year, Make, Model)
CREATE INDEX IX_Drivers_DateOfBirth ON Drivers(DateOfBirth)
CREATE INDEX IX_HomeQuotes_PolicyStartDate ON HomeQuotes(PolicyStartDate)
CREATE INDEX IX_BusinessQuotes_BusinessName ON BusinessQuotes(BusinessName)

-- =====================================================
-- STORED PROCEDURES FOR COMMON OPERATIONS
-- =====================================================

-- Generate Quote Number
CREATE PROCEDURE sp_GenerateQuoteNumber
    @QuoteType NVARCHAR(50),
    @QuoteNumber NVARCHAR(20) OUTPUT
AS
BEGIN
    DECLARE @Prefix NVARCHAR(5)
    DECLARE @Counter INT

    -- Set prefix based on quote type
    SET @Prefix = CASE @QuoteType
        WHEN 'Auto' THEN 'AUTO'
        WHEN 'Home' THEN 'HOME'
        WHEN 'Business' THEN 'BIZ'
        WHEN 'Health' THEN 'HLTH'
        WHEN 'Life' THEN 'LIFE'
        ELSE 'QUOT'
    END

    -- Get next counter for this type
    SELECT @Counter = ISNULL(MAX(CAST(RIGHT(QuoteNumber, 6) AS INT)), 0) + 1
    FROM Quotes
    WHERE QuoteType = @QuoteType

    -- Format quote number
    SET @QuoteNumber = @Prefix + '-' + FORMAT(@Counter, '000000')
END
