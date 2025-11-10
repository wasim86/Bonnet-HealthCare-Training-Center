using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JecaInsurance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddMissingBusinessQuoteEmployeeBenefits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "DeferredCompensation",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "GroupDisabilityInsurance",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "KeyManDisabilityInsurance",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "KeyManLifeInsurance",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "RetirementPlans",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SupplementalPlans",
                table: "BusinessQuotes",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeferredCompensation",
                table: "BusinessQuotes");

            migrationBuilder.DropColumn(
                name: "GroupDisabilityInsurance",
                table: "BusinessQuotes");

            migrationBuilder.DropColumn(
                name: "KeyManDisabilityInsurance",
                table: "BusinessQuotes");

            migrationBuilder.DropColumn(
                name: "KeyManLifeInsurance",
                table: "BusinessQuotes");

            migrationBuilder.DropColumn(
                name: "RetirementPlans",
                table: "BusinessQuotes");

            migrationBuilder.DropColumn(
                name: "SupplementalPlans",
                table: "BusinessQuotes");
        }
    }
}
