using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClaimsIn3YearsOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClaimsIn3YearsOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContinuousCoverageOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContinuousCoverageOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CoverageDesiredOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoverageDesiredOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PolicyExpiresInOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PolicyExpiresInOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Quotes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    QuoteType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    QuoteNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    City = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    State = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ZipCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    CurrentInsuranceCompany = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    ContinuousCoverage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    PolicyExpiresIn = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ClaimsIn3Years = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    TicketsIn3Years = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    CoverageDesired = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    WhenToStart = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    AdditionalComments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InformationSecure = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    Status = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quotes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TicketsIn3YearsOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketsIn3YearsOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WatercraftTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WatercraftTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkSchoolDistanceOptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkSchoolDistanceOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnnuityQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnnuityQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_AnnuityQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AutoQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AutoQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_AutoQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BoatQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_BoatQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BOPQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BusinessName = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    BusinessDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BOPQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_BOPQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BusinessQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BusinessName = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    YearsInBusiness = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    LegalEntity = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PartnersOwners = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FullTimeEmployees = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    PartTimeEmployees = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    SubContractors = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    OneTimeOrSeasonal = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    AnnualRevenue = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ReplaceExistingPolicy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BusinessDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GeneralLiability = table.Column<bool>(type: "bit", nullable: false),
                    CommercialAuto = table.Column<bool>(type: "bit", nullable: false),
                    CommercialProperty = table.Column<bool>(type: "bit", nullable: false),
                    CyberLiability = table.Column<bool>(type: "bit", nullable: false),
                    ProfessionalLiability = table.Column<bool>(type: "bit", nullable: false),
                    DirectorsOfficersLiability = table.Column<bool>(type: "bit", nullable: false),
                    BusinessOwnersPackage = table.Column<bool>(type: "bit", nullable: false),
                    WorkersCompensation = table.Column<bool>(type: "bit", nullable: false),
                    CommercialCrime = table.Column<bool>(type: "bit", nullable: false),
                    GroupHealthInsurance = table.Column<bool>(type: "bit", nullable: false),
                    GroupLifeInsurance = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_BusinessQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DentalQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NumberOfPeople = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DentalRecords = table.Column<bool>(type: "bit", nullable: false),
                    XrayImages = table.Column<bool>(type: "bit", nullable: false),
                    TreatmentHistory = table.Column<bool>(type: "bit", nullable: false),
                    InsuranceCards = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DentalQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_DentalQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DisabilityInsuranceQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Occupation = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MonthlyIncome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    TobaccoUse = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisabilityInsuranceQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_DisabilityInsuranceQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Drivers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DriverType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsPrimary = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Married = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AccidentsTickets = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drivers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Drivers_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FileAttachments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    OriginalFileName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FileSize = table.Column<long>(type: "bigint", nullable: false),
                    ContentType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FileCategory = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StoragePath = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    UploadedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileAttachments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileAttachments_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FloodQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PolicyOwner = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    HomeType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    BuildingPurpose = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    RentingHome = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FloodClaims = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DesiredContents = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DesiredBuilding = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FloodQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_FloodQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HealthQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Smoker = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Pregnant = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Dependents = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AnnualHouseholdIncome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    SpouseFirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    SpouseLastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    SpouseGender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    SpouseDateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: true),
                    SpouseSmoker = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    SpousePregnant = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_HealthQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HomeQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    HomeType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    YearBuilt = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    SquareFootage = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    ConstructionType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PrimaryHeating = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Foundation = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Bedrooms = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    RoofType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Bathrooms = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    RoofAge = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Stories = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    GarageType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DeadBolts = table.Column<bool>(type: "bit", nullable: false),
                    FireExtinguishers = table.Column<bool>(type: "bit", nullable: false),
                    Trampoline = table.Column<bool>(type: "bit", nullable: false),
                    CoveredDeckPatio = table.Column<bool>(type: "bit", nullable: false),
                    SwimmingPool = table.Column<bool>(type: "bit", nullable: false),
                    FloodPlan = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    SecuritySystem = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MunicipalLocation = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FireAlarm = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DogBreeds = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    ReplacementCost = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PersonalLiability = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DesiredDeductible = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CreditRating = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ReportedClaims = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ReplaceExistingPolicy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HomeQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_HomeQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LandlordsQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NumberOfUnits = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    TotalSquareFeet = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LandlordsQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_LandlordsQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LifeInsuranceQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CoverageType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    AmountOfCoverage = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Height = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Weight = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    TobaccoUse = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    MajorDiseases = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    StrokeHeartAttack = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    CancerDiagnosis = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    BusinessHobby = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LifeInsuranceQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_LifeInsuranceQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicareAdvantageQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicareAdvantageQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_MedicareAdvantageQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MedicareSupplementQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicareSupplementQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_MedicareSupplementQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MotorcycleQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MotorcycleQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_MotorcycleQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RentersQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TypeOfHome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    EstimatedSquareFootage = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    TotalNumberOfRooms = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DogBreeds = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    DeadBolts = table.Column<bool>(type: "bit", nullable: false),
                    FireExtinguishers = table.Column<bool>(type: "bit", nullable: false),
                    Trampoline = table.Column<bool>(type: "bit", nullable: false),
                    CoveredDeckPatio = table.Column<bool>(type: "bit", nullable: false),
                    SwimmingPool = table.Column<bool>(type: "bit", nullable: false),
                    ReplacementValue = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PersonalLiabilityCoverage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DesiredDeductible = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CreditRating = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ReportedClaims = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ReplaceExistingPolicy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentersQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_RentersQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UmbrellaInsuranceQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VehiclesOwned = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PropertiesOwned = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    HouseholdAccidents = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AmountOfCoverage = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    TrafficTickets = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UmbrellaInsuranceQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_UmbrellaInsuranceQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VehicleType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsPrimary = table.Column<bool>(type: "bit", nullable: false),
                    Year = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Make = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Model = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DriveToWorkSchool = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    IsLeased = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    WorkSchoolDistance = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    CollisionDeductible = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AnnualMileage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ComprehensiveDeductible = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MoreThanTwoVehicles = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Manufacturer = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    WatercraftType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Length = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    BoatUse = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MarketValue = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    NumberOfEngines = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    TotalHorsepower = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    EngineType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Deductible = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    HullMaterial = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    TrailerCoverage = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    StorageLocation = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    StructuralModifications = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vehicles_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VisionQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NumberOfPeople = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    PolicyStartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VisionQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_VisionQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkersCompQuotes",
                columns: table => new
                {
                    QuoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BusinessName = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    NumberOfEmployees = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkersCompQuotes", x => x.QuoteId);
                    table.ForeignKey(
                        name: "FK_WorkersCompQuotes_Quotes_QuoteId",
                        column: x => x.QuoteId,
                        principalTable: "Quotes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "ClaimsIn3YearsOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "None" },
                    { 2, 2, "1" },
                    { 3, 3, "2" },
                    { 4, 4, "3" },
                    { 5, 5, "4+" }
                });

            migrationBuilder.InsertData(
                table: "ContinuousCoverageOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "3+ Years" },
                    { 2, 2, "2 Years" },
                    { 3, 3, "1 Year" },
                    { 4, 4, "6 Months" },
                    { 5, 5, "Under 6 months" },
                    { 6, 6, "Not Currently Insured" }
                });

            migrationBuilder.InsertData(
                table: "CoverageDesiredOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "State Minimum" },
                    { 2, 2, "Standard Coverage" },
                    { 3, 3, "Premium Coverage" }
                });

            migrationBuilder.InsertData(
                table: "PolicyExpiresInOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "Not sure" },
                    { 2, 2, "A Few days" },
                    { 3, 3, "2 weeks" },
                    { 4, 4, "1 Month" },
                    { 5, 5, "2 Months" },
                    { 6, 6, "3 Months" },
                    { 7, 7, "3-6 Months" },
                    { 8, 8, "6+ Months" }
                });

            migrationBuilder.InsertData(
                table: "TicketsIn3YearsOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "None" },
                    { 2, 2, "1" },
                    { 3, 3, "2" },
                    { 4, 4, "3" },
                    { 5, 5, "4" },
                    { 6, 6, "5" },
                    { 7, 7, "6+" }
                });

            migrationBuilder.InsertData(
                table: "WatercraftTypes",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "Runaboat" },
                    { 2, 2, "Bass Boat" },
                    { 3, 3, "Cabin Cruiser" },
                    { 4, 4, "Pontoon" },
                    { 5, 5, "Sail Boat - Single-Hull" },
                    { 6, 6, "Sail Boat - Multi-Hull" },
                    { 7, 7, "Houseboat" },
                    { 8, 8, "Inflatable" }
                });

            migrationBuilder.InsertData(
                table: "WorkSchoolDistanceOptions",
                columns: new[] { "Id", "DisplayOrder", "Value" },
                values: new object[,]
                {
                    { 1, 1, "Less than 5 Miles" },
                    { 2, 2, "5 Miles" },
                    { 3, 3, "10 Miles" },
                    { 4, 4, "15 Miles" },
                    { 5, 5, "20 Miles" },
                    { 6, 6, "30 Miles" },
                    { 7, 7, "Over 30 Miles" },
                    { 8, 8, "N/A" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BusinessQuotes_BusinessName",
                table: "BusinessQuotes",
                column: "BusinessName");

            migrationBuilder.CreateIndex(
                name: "IX_ClaimsIn3YearsOptions_Value",
                table: "ClaimsIn3YearsOptions",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContinuousCoverageOptions_Value",
                table: "ContinuousCoverageOptions",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoverageDesiredOptions_Value",
                table: "CoverageDesiredOptions",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Drivers_DateOfBirth",
                table: "Drivers",
                column: "DateOfBirth");

            migrationBuilder.CreateIndex(
                name: "IX_Drivers_DriverType",
                table: "Drivers",
                column: "DriverType");

            migrationBuilder.CreateIndex(
                name: "IX_Drivers_QuoteId",
                table: "Drivers",
                column: "QuoteId");

            migrationBuilder.CreateIndex(
                name: "IX_FileAttachments_FileCategory",
                table: "FileAttachments",
                column: "FileCategory");

            migrationBuilder.CreateIndex(
                name: "IX_FileAttachments_QuoteId",
                table: "FileAttachments",
                column: "QuoteId");

            migrationBuilder.CreateIndex(
                name: "IX_HomeQuotes_PolicyStartDate",
                table: "HomeQuotes",
                column: "PolicyStartDate");

            migrationBuilder.CreateIndex(
                name: "IX_PolicyExpiresInOptions_Value",
                table: "PolicyExpiresInOptions",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_CreatedDate",
                table: "Quotes",
                column: "CreatedDate");

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_Email",
                table: "Quotes",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_FirstName_LastName",
                table: "Quotes",
                columns: new[] { "FirstName", "LastName" });

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_QuoteNumber",
                table: "Quotes",
                column: "QuoteNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_QuoteType",
                table: "Quotes",
                column: "QuoteType");

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_Status",
                table: "Quotes",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_TicketsIn3YearsOptions_Value",
                table: "TicketsIn3YearsOptions",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_QuoteId",
                table: "Vehicles",
                column: "QuoteId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_VehicleType",
                table: "Vehicles",
                column: "VehicleType");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_Year_Make_Model",
                table: "Vehicles",
                columns: new[] { "Year", "Make", "Model" });

            migrationBuilder.CreateIndex(
                name: "IX_WatercraftTypes_Value",
                table: "WatercraftTypes",
                column: "Value",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_WorkSchoolDistanceOptions_Value",
                table: "WorkSchoolDistanceOptions",
                column: "Value",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnnuityQuotes");

            migrationBuilder.DropTable(
                name: "AutoQuotes");

            migrationBuilder.DropTable(
                name: "BoatQuotes");

            migrationBuilder.DropTable(
                name: "BOPQuotes");

            migrationBuilder.DropTable(
                name: "BusinessQuotes");

            migrationBuilder.DropTable(
                name: "ClaimsIn3YearsOptions");

            migrationBuilder.DropTable(
                name: "ContinuousCoverageOptions");

            migrationBuilder.DropTable(
                name: "CoverageDesiredOptions");

            migrationBuilder.DropTable(
                name: "DentalQuotes");

            migrationBuilder.DropTable(
                name: "DisabilityInsuranceQuotes");

            migrationBuilder.DropTable(
                name: "Drivers");

            migrationBuilder.DropTable(
                name: "FileAttachments");

            migrationBuilder.DropTable(
                name: "FloodQuotes");

            migrationBuilder.DropTable(
                name: "HealthQuotes");

            migrationBuilder.DropTable(
                name: "HomeQuotes");

            migrationBuilder.DropTable(
                name: "LandlordsQuotes");

            migrationBuilder.DropTable(
                name: "LifeInsuranceQuotes");

            migrationBuilder.DropTable(
                name: "MedicareAdvantageQuotes");

            migrationBuilder.DropTable(
                name: "MedicareSupplementQuotes");

            migrationBuilder.DropTable(
                name: "MotorcycleQuotes");

            migrationBuilder.DropTable(
                name: "PolicyExpiresInOptions");

            migrationBuilder.DropTable(
                name: "RentersQuotes");

            migrationBuilder.DropTable(
                name: "TicketsIn3YearsOptions");

            migrationBuilder.DropTable(
                name: "UmbrellaInsuranceQuotes");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "VisionQuotes");

            migrationBuilder.DropTable(
                name: "WatercraftTypes");

            migrationBuilder.DropTable(
                name: "WorkersCompQuotes");

            migrationBuilder.DropTable(
                name: "WorkSchoolDistanceOptions");

            migrationBuilder.DropTable(
                name: "Quotes");
        }
    }
}
