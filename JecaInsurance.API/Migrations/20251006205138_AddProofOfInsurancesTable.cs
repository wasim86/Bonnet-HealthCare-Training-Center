using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddProofOfInsurancesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProofOfInsurances",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    RequestNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ProofType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    InsuranceCarrier = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PolicyNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    RequestDescription = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    InformationSecure = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ProcessedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ProcessingNotes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    DocumentPath = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProofOfInsurances", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_CreatedDate",
                table: "ProofOfInsurances",
                column: "CreatedDate");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_Email",
                table: "ProofOfInsurances",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_FirstName_LastName",
                table: "ProofOfInsurances",
                columns: new[] { "FirstName", "LastName" });

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_InsuranceCarrier",
                table: "ProofOfInsurances",
                column: "InsuranceCarrier");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_PolicyNumber",
                table: "ProofOfInsurances",
                column: "PolicyNumber");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_ProcessedDate",
                table: "ProofOfInsurances",
                column: "ProcessedDate");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_ProofType",
                table: "ProofOfInsurances",
                column: "ProofType");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_RequestNumber",
                table: "ProofOfInsurances",
                column: "RequestNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfInsurances_Status",
                table: "ProofOfInsurances",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProofOfInsurances");
        }
    }
}
