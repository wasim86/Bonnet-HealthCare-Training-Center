using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddContactUpdatesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactUpdates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    UpdateNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ChangeType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ChangeDescription = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    InformationSecure = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ProcessedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ProcessingNotes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactUpdates", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_ChangeType",
                table: "ContactUpdates",
                column: "ChangeType");

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_CreatedDate",
                table: "ContactUpdates",
                column: "CreatedDate");

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_Email",
                table: "ContactUpdates",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_FirstName_LastName",
                table: "ContactUpdates",
                columns: new[] { "FirstName", "LastName" });

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_ProcessedDate",
                table: "ContactUpdates",
                column: "ProcessedDate");

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_Status",
                table: "ContactUpdates",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_ContactUpdates_UpdateNumber",
                table: "ContactUpdates",
                column: "UpdateNumber",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactUpdates");
        }
    }
}
