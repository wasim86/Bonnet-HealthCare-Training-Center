# JECA INSURANCE API ENDPOINTS SPECIFICATION

## Base URL
```
https://api.jecainsurance.com/v1
```

## Authentication
- **Type**: JWT Bearer Token (future implementation)
- **Header**: `Authorization: Bearer {token}`

## Common Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success",
  "errors": [],
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Error Response Format
```json
{
  "success": false,
  "data": null,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## 🚗 **VEHICLE INSURANCE ENDPOINTS**

### **Auto Insurance Quote**
```http
POST /api/quotes/auto
Content-Type: application/json
```

**Request Body:**
```json
{
  "vehicles": [
    {
      "isPrimary": true,
      "year": "2020",
      "make": "Toyota",
      "model": "Camry",
      "driveToWorkSchool": "Yes",
      "isLeased": "No",
      "workSchoolDistance": "10 Miles",
      "collisionDeductible": "$500",
      "annualMileage": "12,000",
      "comprehensiveDeductible": "$500",
      "moreThanTwoVehicles": "No"
    }
  ],
  "drivers": [
    {
      "isPrimary": true,
      "name": "John Doe",
      "gender": "Male",
      "dateOfBirth": "1985-05-15",
      "married": "Yes",
      "status": "Employed"
    }
  ],
  "additionalInformation": {
    "firstName": "John",
    "lastName": "Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "zipcode": "12345",
    "state": "CA",
    "country": "USA",
    "email": "john.doe@email.com",
    "phoneNumber": "555-123-4567",
    "currentInsuranceCompany": "State Farm",
    "continuousCoverage": "3+ Years",
    "policyExpiresIn": "2 Months",
    "claimsIn3Years": "None",
    "ticketsIn3Years": "1",
    "coverageDesired": "Standard Coverage",
    "whenToStart": "ASAP",
    "message": "Looking for better rates",
    "informationSecure": true
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "quoteId": "550e8400-e29b-41d4-a716-446655440000",
    "quoteNumber": "AUTO-000001",
    "status": "Pending",
    "estimatedPremium": null,
    "createdDate": "2024-01-01T10:00:00Z"
  },
  "message": "Auto quote submitted successfully"
}
```

### **Boat Insurance Quote**
```http
POST /api/quotes/boat
Content-Type: application/json
```

**Request Body:**
```json
{
  "boats": [
    {
      "isPrimary": true,
      "year": "2018",
      "manufacturer": "Sea Ray",
      "model": "Sundancer",
      "watercraftType": "Cabin Cruiser",
      "length": "25",
      "boatUse": "Pleasure",
      "marketValue": "$75000",
      "numberOfEngines": "2",
      "totalHorsepower": "500",
      "engineType": "Outboard",
      "deductible": "$1000",
      "hullMaterial": "Fiberglass",
      "trailerCoverage": "Yes",
      "storageLocation": "Marina",
      "structuralModifications": "None"
    }
  ],
  "operators": [
    {
      "isPrimary": true,
      "name": "John Doe",
      "gender": "Male",
      "dateOfBirth": "1985-05-15",
      "married": "Yes",
      "accidentsTickets": "0"
    }
  ],
  "additionalInformation": {
    "firstName": "John",
    "lastName": "Doe",
    "address": "123 Marina Dr",
    "city": "Coastal City",
    "zipcode": "12345",
    "state": "FL",
    "country": "USA",
    "email": "john.doe@email.com",
    "phoneNumber": "555-123-4567",
    "coverageDesired": "Standard Coverage",
    "message": "Need comprehensive boat coverage",
    "isSecure": true
  }
}
```

### **Motorcycle Insurance Quote**
```http
POST /api/quotes/motorcycle
Content-Type: application/json
```

**Request Body:** (Similar structure to Auto with motorcycle-specific fields)

---

## 🏠 **PROPERTY INSURANCE ENDPOINTS**

### **Home Insurance Quote**
```http
POST /api/quotes/home
Content-Type: application/json
```

**Request Body:**
```json
{
  "homeDetails": {
    "homeType": "Single Family",
    "yearBuilt": "1995",
    "squareFootage": "2500",
    "constructionType": "Frame",
    "primaryHeating": "Gas",
    "foundation": "Slab",
    "bedrooms": "4",
    "roofType": "Shingle",
    "bathrooms": "3",
    "roofAge": "5 years",
    "stories": "2",
    "garageType": "Attached",
    "deadBolts": true,
    "fireExtinguishers": true,
    "trampoline": false,
    "coveredDeckPatio": true,
    "swimmingPool": false,
    "floodPlan": "No",
    "securitySystem": "Yes",
    "municipalLocation": "City",
    "fireAlarm": "Yes",
    "dogBreeds": "None",
    "replacementCost": "$300000",
    "personalLiability": "$300000",
    "desiredDeductible": "$1000",
    "creditRating": "Excellent",
    "reportedClaims": "None",
    "replaceExistingPolicy": "Yes",
    "policyStartDate": "2024-02-01"
  },
  "additionalInformation": {
    "firstName": "Jane",
    "lastName": "Smith",
    "address": "456 Oak St",
    "city": "Hometown",
    "zipcode": "54321",
    "state": "TX",
    "country": "USA",
    "email": "jane.smith@email.com",
    "phoneNumber": "555-987-6543",
    "additionalComments": "New homeowner",
    "informationSecure": true
  }
}
```

### **Flood Insurance Quote**
```http
POST /api/quotes/flood
Content-Type: application/json
```

**Request Body:**
```json
{
  "personalInformation": {
    "firstName": "Bob",
    "lastName": "Johnson",
    "address": "789 River Rd",
    "city": "Floodville",
    "state": "LA",
    "zipcode": "70123",
    "country": "USA",
    "email": "bob.johnson@email.com",
    "phoneNumber": "555-456-7890"
  },
  "propertyInformation": {
    "policyOwner": "Owner",
    "homeType": "Single Family",
    "buildingPurpose": "Primary Residence",
    "rentingHome": "No",
    "floodClaims": "no"
  },
  "coverageInformation": {
    "desiredContents": "50000",
    "desiredBuilding": "200000"
  },
  "comments": "Property in flood zone"
}
```

### **Renters Insurance Quote**
```http
POST /api/quotes/renters
Content-Type: application/json
```

### **Landlords Insurance Quote**
```http
POST /api/quotes/landlords
Content-Type: application/json
```

---

## 🏢 **BUSINESS INSURANCE ENDPOINTS**

### **Business Insurance Quote**
```http
POST /api/quotes/business
Content-Type: application/json
```

**Request Body:**
```json
{
  "businessInformation": {
    "businessName": "ABC Corp",
    "yearsInBusiness": "5",
    "legalEntity": "Corporation",
    "partnersOwners": "2",
    "fullTimeEmployees": "10",
    "partTimeEmployees": "3",
    "subContractors": "2",
    "oneTimeOrSeasonal": "No",
    "annualRevenue": "$1,000,000",
    "replaceExistingPolicy": "Yes",
    "businessDescription": "Software development company",
    "whenToStart": "Next month"
  },
  "contactInformation": {
    "firstName": "Mike",
    "lastName": "Wilson",
    "email": "mike.wilson@abccorp.com",
    "phoneNumber": "555-111-2222",
    "additionalComments": "Growing business needs"
  },
  "insuranceTypes": {
    "generalLiability": true,
    "commercialAuto": false,
    "commercialProperty": true,
    "cyberLiability": true,
    "professionalLiability": true,
    "directorsOfficersLiability": false,
    "businessOwnersPackage": false,
    "workersCompensation": true,
    "commercialCrime": false,
    "groupHealthInsurance": true,
    "groupLifeInsurance": false
  }
}
```

### **Business Owner Package (BOP) Quote**
```http
POST /api/quotes/bop
Content-Type: application/json
```

### **Workers Compensation Quote**
```http
POST /api/quotes/workers-comp
Content-Type: application/json
```

---

## 🏥 **HEALTH & LIFE INSURANCE ENDPOINTS**

### **Health Insurance Quote**
```http
POST /api/quotes/health
Content-Type: application/json
```

**Request Body:**
```json
{
  "primaryIndividual": {
    "firstName": "Sarah",
    "lastName": "Davis",
    "gender": "Female",
    "dateOfBirth": "1990-03-20",
    "smoker": "No",
    "pregnant": "No",
    "dependents": "2",
    "annualHouseholdIncome": "$75000"
  },
  "spouse": {
    "spouseFirstName": "Tom",
    "spouseLastName": "Davis",
    "spouseGender": "Male",
    "spouseDateOfBirth": "1988-07-10",
    "spouseSmoker": "No",
    "spousePregnant": "N/A"
  },
  "contactInformation": {
    "address": "321 Health St",
    "city": "Wellness",
    "zipcode": "98765",
    "state": "WA",
    "country": "USA",
    "email": "sarah.davis@email.com",
    "phoneNumber": "555-333-4444",
    "message": "Family coverage needed",
    "informationSecure": true
  }
}
```

### **Dental Insurance Quote**
```http
POST /api/quotes/dental
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "numberOfPeople": "4",
  "policyStartDate": "2024-03-01",
  "firstName": "Lisa",
  "lastName": "Brown",
  "address": "654 Dental Ave",
  "city": "Smile City",
  "zipcode": "13579",
  "state": "NY",
  "country": "USA",
  "email": "lisa.brown@email.com",
  "phoneNumber": "555-777-8888",
  "additionalComments": "Family dental plan",
  "informationSecure": true,
  "dentalRecords": true,
  "xrayImages": false,
  "treatmentHistory": true,
  "insuranceCards": false
}
```

**Files:** (Optional file attachments based on checkboxes)
- `dentalRecords`: File[]
- `treatmentHistory`: File[]

### **Life Insurance Quote**
```http
POST /api/quotes/life
Content-Type: application/json
```

---

## 🛡️ **SPECIALTY INSURANCE ENDPOINTS**

### **Umbrella Insurance Quote**
```http
POST /api/quotes/umbrella
Content-Type: application/json
```

### **Disability Insurance Quote**
```http
POST /api/quotes/disability
Content-Type: application/json
```

---

## 🏥 **MEDICARE & SIMPLE ENDPOINTS**

### **Medicare Advantage Quote**
```http
POST /api/quotes/medicare-advantage
Content-Type: application/json
```

### **Medicare Supplement Quote**
```http
POST /api/quotes/medicare-supplement
Content-Type: application/json
```

### **Vision Insurance Quote**
```http
POST /api/quotes/vision
Content-Type: application/json
```

### **Annuity Quote**
```http
POST /api/quotes/annuity
Content-Type: application/json
```

---

## 📋 **UTILITY ENDPOINTS**

### **Get Quote by ID**
```http
GET /api/quotes/{quoteId}
```

### **Get Quote by Quote Number**
```http
GET /api/quotes/number/{quoteNumber}
```

### **Get Quotes by Email**
```http
GET /api/quotes/email/{email}
```

### **Update Quote Status**
```http
PATCH /api/quotes/{quoteId}/status
Content-Type: application/json

{
  "status": "Approved",
  "notes": "Quote approved by underwriter"
}
```

### **Get Dropdown Options**
```http
GET /api/lookup/continuous-coverage
GET /api/lookup/policy-expires-in
GET /api/lookup/claims-in-3-years
GET /api/lookup/tickets-in-3-years
GET /api/lookup/coverage-desired
GET /api/lookup/work-school-distance
GET /api/lookup/watercraft-types
```

### **File Upload for Dental Quotes**
```http
POST /api/quotes/{quoteId}/files
Content-Type: multipart/form-data

{
  "category": "dentalRecords",
  "files": [File]
}
```

### **Get Files for Quote**
```http
GET /api/quotes/{quoteId}/files
```

### **Download File**
```http
GET /api/quotes/{quoteId}/files/{fileId}/download
```

---

## 🔒 **VALIDATION RULES**

### **Common Validations**
- Email: Valid email format, required
- Phone: Valid phone format, required
- Names: Required, 2-100 characters
- Dates: Valid date format, not future dates for birth dates
- Required fields: Cannot be null or empty

### **Business Rules**
- Auto: At least 1 vehicle and 1 driver required
- Boat: At least 1 boat and 1 operator required
- Motorcycle: At least 1 motorcycle and 1 driver required
- Age validation: Drivers must be 16+ years old
- File size: Maximum 10MB per file
- File types: PDF, JPG, PNG only for attachments

### **Error Codes**
- `400`: Bad Request - Validation errors
- `404`: Not Found - Quote not found
- `409`: Conflict - Duplicate quote number
- `413`: Payload Too Large - File size exceeded
- `415`: Unsupported Media Type - Invalid file type
- `500`: Internal Server Error - System error
