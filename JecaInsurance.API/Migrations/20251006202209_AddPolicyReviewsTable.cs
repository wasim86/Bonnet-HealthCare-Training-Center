using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddPolicyReviewsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PolicyReviews",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "NEWID()"),
                    ReviewNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ReviewMethod = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    DiscussionTopics = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: true),
                    InformationSecure = table.Column<bool>(type: "bit", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ScheduledDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PolicyReviews", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_CreatedDate",
                table: "PolicyReviews",
                column: "CreatedDate");

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_Email",
                table: "PolicyReviews",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_FirstName_LastName",
                table: "PolicyReviews",
                columns: new[] { "FirstName", "LastName" });

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_ReviewMethod",
                table: "PolicyReviews",
                column: "ReviewMethod");

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_ReviewNumber",
                table: "PolicyReviews",
                column: "ReviewNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_ScheduledDate",
                table: "PolicyReviews",
                column: "ScheduledDate");

            migrationBuilder.CreateIndex(
                name: "IX_PolicyReviews_Status",
                table: "PolicyReviews",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PolicyReviews");
        }
    }
}
