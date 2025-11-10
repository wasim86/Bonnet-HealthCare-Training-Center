using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddConsultationsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consultations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    ConsultationNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ConsultationType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    DiscussionTopics = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    InformationSecure = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ScheduledDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CompletedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    AssignedAgent = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consultations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_AssignedAgent",
                table: "Consultations",
                column: "AssignedAgent");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_CompletedDate",
                table: "Consultations",
                column: "CompletedDate");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_ConsultationNumber",
                table: "Consultations",
                column: "ConsultationNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_ConsultationType",
                table: "Consultations",
                column: "ConsultationType");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_CreatedDate",
                table: "Consultations",
                column: "CreatedDate");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_Email",
                table: "Consultations",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_FirstName_LastName",
                table: "Consultations",
                columns: new[] { "FirstName", "LastName" });

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_ScheduledDate",
                table: "Consultations",
                column: "ScheduledDate");

            migrationBuilder.CreateIndex(
                name: "IX_Consultations_Status",
                table: "Consultations",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consultations");
        }
    }
}
