'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import HomeAdditionalInformationForm from './HomeAdditionalInformationForm'
import { useHomeQuoteForm } from '../../lib/hooks/useQuoteForm'
import { HomeQuote } from '../../lib/types'

interface FormData {
  // Building Information
  homeType: string
  yearBuilt: string
  squareFootage: string
  constructionType: string
  primaryHeating: string
  foundation: string
  bedrooms: string
  roofType: string
  bathrooms: string
  roofAge: string
  stories: string
  garageType: string
  
  // Property Features
  DeadBolts: boolean
  FireExtinguishers: boolean
  Trampoline: boolean
  CoveredDeckPatio: boolean
  SwimmingPool: boolean
  
  // Location & Safety
  floodPlan: string
  securitySystem: string
  municipalLocation: string
  fireAlarm: string
  dogBreeds: string

  // Policy Information
  replacementCost: string
  personalLiability: string
  desiredDeductible: string
  creditRating: string
  reportedClaims: string
  replaceExistingPolicy: string
  policyStartDate: string
}

export default function HomeQuoteForm() {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useHomeQuoteForm({
    onSuccess: (quote) => {
      console.log('Home quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Home quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<FormData>({
    homeType: '',
    yearBuilt: '',
    squareFootage: '',
    constructionType: '',
    primaryHeating: '',
    foundation: '',
    bedrooms: '',
    roofType: '',
    bathrooms: '',
    roofAge: '',
    stories: '',
    garageType: '',
    DeadBolts: false,
    FireExtinguishers: false,
    Trampoline: false,
    CoveredDeckPatio: false,
    SwimmingPool: false,
    floodPlan: '',
    securitySystem: '',
    municipalLocation: '',
    fireAlarm: '',
    dogBreeds: '',
    replacementCost: '',
    personalLiability: '',
    desiredDeductible: '',
    creditRating: '',
    reportedClaims: '',
    replaceExistingPolicy: '',
    policyStartDate: ''
  })

  const [mainFormCompleted, setMainFormCompleted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleMainFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMainFormCompleted(true)
  }

  const handleAdditionalInformationSubmit = async (data: any) => {
    if (!data) {
      console.error('Missing additional information data');
      return;
    }

    // Prepare the complete home quote data
    const homeQuoteData: HomeQuote = {
      // Personal information from additional information form
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phoneNumber: data.phoneNumber || '',
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country || 'United States',

      // Insurance information
      currentInsuranceCompany: data.currentInsuranceCompany,
      continuousCoverage: data.continuousCoverage,
      policyExpiresIn: data.policyExpiresIn,
      claimsIn3Years: data.claimsIn3Years,
      ticketsIn3Years: data.ticketsIn3Years,
      coverageDesired: data.coverageDesired,
      whenToStart: data.whenToStart,
      additionalComments: data.additionalComments,
      informationSecure: data.informationSecure || false,

      // Home-specific information from main form (PascalCase for backend)
      HomeType: formData.homeType,
      YearBuilt: formData.yearBuilt?.toString(),
      SquareFootage: formData.squareFootage?.toString(),
      Stories: formData.stories,
      ConstructionType: formData.constructionType,
      RoofType: formData.roofType,
      Foundation: formData.foundation,
      PrimaryHeating: formData.primaryHeating,
      Bedrooms: formData.bedrooms,
      Bathrooms: formData.bathrooms,
      RoofAge: formData.roofAge,
      GarageType: formData.garageType,
      FloodPlan: formData.floodPlan,
      SecuritySystem: formData.securitySystem,
      MunicipalLocation: formData.municipalLocation,
      FireAlarm: formData.fireAlarm,
      DogBreeds: formData.dogBreeds,
      ReplacementCost: formData.replacementCost?.toString(),
      PersonalLiability: formData.personalLiability,
      DesiredDeductible: formData.desiredDeductible,
      CreditRating: formData.creditRating,
      ReportedClaims: formData.reportedClaims,
      ReplaceExistingPolicy: formData.replaceExistingPolicy,
      PolicyStartDate: formData.policyStartDate,

      // Property Features (Checkboxes)
      DeadBolts: formData.DeadBolts,
      FireExtinguishers: formData.FireExtinguishers,
      Trampoline: formData.Trampoline,
      CoveredDeckPatio: formData.CoveredDeckPatio,
      SwimmingPool: formData.SwimmingPool,
    };

    console.log('Submitting Home Quote Data:', homeQuoteData);

    // Submit to API
    await submitQuote(homeQuoteData);
  }



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6">
        <div className="flex items-center justify-center space-x-3">
          <HomeIcon className="h-8 w-8 text-white" />
          <h2 className="text-2xl font-bold text-white">Building Information</h2>
        </div>
      </div>

      <form onSubmit={handleMainFormSubmit} className="p-8 space-y-8">
        {/* Type of Home */}
        <div>
          <label htmlFor="homeType" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Home *
          </label>
          <select
            id="homeType"
            name="homeType"
            value={formData.homeType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Choose option</option>
            <option value="single-family">Single Family Home</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condominium</option>
            <option value="duplex">Duplex</option>
            <option value="mobile-home">Mobile Home</option>
          </select>
        </div>

        {/* Row 1: Year Built, Square Footage, Construction Type, Primary Heating */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
              Year Built *
            </label>
            <input
              type="number"
              id="yearBuilt"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleInputChange}
              required
              min="1800"
              max={new Date().getFullYear()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="e.g., 2010"
            />
          </div>

          <div>
            <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-2">
              Square Footage *
            </label>
            <input
              type="number"
              id="squareFootage"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleInputChange}
              required
              min="500"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="e.g., 2500"
            />
          </div>

          <div>
            <label htmlFor="constructionType" className="block text-sm font-medium text-gray-700 mb-2">
              Construction Type *
            </label>
            <select
              id="constructionType"
              name="constructionType"
              value={formData.constructionType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="wood-frame">Mostly Wood Frame</option>
              <option value="brick">Mostly Brick</option>
              <option value="stucco">Stucco</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="primaryHeating" className="block text-sm font-medium text-gray-700 mb-2">
              Primary Heating *
            </label>
            <select
              id="primaryHeating"
              name="primaryHeating"
              value={formData.primaryHeating}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="gas-forced-air">Gas (Forced Air)</option>
              <option value="electric">Electric</option>
              <option value="hot-water-radiator">Hot Water Radiator</option>
              <option value="oil-coal-kerosene">Oil/Coal/Kerosene</option>
              <option value="propane">Propane</option>
              <option value="stove">Stove</option>
            </select>
          </div>
        </div>

        {/* Row 2: Foundation, Bedrooms, Roof Type, Bathrooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="foundation" className="block text-sm font-medium text-gray-700 mb-2">
              Foundation *
            </label>
            <select
              id="foundation"
              name="foundation"
              value={formData.foundation}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="bsmt-fully-finished">Bsmt Fully Finished</option>
              <option value="bsmt-half-finished">Bsmt Half Finished</option>
              <option value="bsmt-unfinished">Bsmt Unfinished</option>
              <option value="crawlspace">Crawlspace</option>
              <option value="slab">Slab</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms *
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7+">7+</option>
            </select>
          </div>

          <div>
            <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-2">
              Roof Type *
            </label>
            <select
              id="roofType"
              name="roofType"
              value={formData.roofType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="asphalt-shingle">Asphalt Shingle</option>
              <option value="tile">Tile</option>
              <option value="concrete">Concrete</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
              Bathrooms *
            </label>
            <select
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>

        {/* Row 3: Roof Age, Stories, Garage Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="roofAge" className="block text-sm font-medium text-gray-700 mb-2">
              Roof Age *
            </label>
            <select
              id="roofAge"
              name="roofAge"
              value={formData.roofAge}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="under-5">Under 5 Years</option>
              <option value="5-10">5-10 Years</option>
              <option value="over-10">Over 10 Years</option>
            </select>
          </div>

          <div>
            <label htmlFor="stories" className="block text-sm font-medium text-gray-700 mb-2">
              Stories *
            </label>
            <select
              id="stories"
              name="stories"
              value={formData.stories}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="one">One Story</option>
              <option value="bi-level">Bi Level</option>
              <option value="two">Two Story</option>
              <option value="tri-level">Tri Level</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="garageType" className="block text-sm font-medium text-gray-700 mb-2">
              Garage Type *
            </label>
            <select
              id="garageType"
              name="garageType"
              value={formData.garageType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="attached-1">Attached - 1 Car</option>
              <option value="attached-2">Attached - 2 Car</option>
              <option value="attached-3">Attached - 3 Car</option>
              <option value="detached-1">Detached - 1 Car</option>
              <option value="detached-2">Detached - 2 Car</option>
              <option value="detached-3">Detached - 3 Car</option>
              <option value="none">No Garage</option>
            </select>
          </div>
        </div>

        {/* Property Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Select any additional property features that apply:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'DeadBolts', label: 'Dead Bolts' },
              { name: 'FireExtinguishers', label: 'Fire Extinguishers' },
              { name: 'Trampoline', label: 'Trampoline' },
              { name: 'CoveredDeckPatio', label: 'Covered Deck/Patio' },
              { name: 'SwimmingPool', label: 'Swimming Pool' }
            ].map((feature) => (
              <label key={feature.name} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name={feature.name}
                  checked={formData[feature.name as keyof FormData] as boolean}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Flood Plan */}
        <div>
          <label htmlFor="floodPlan" className="block text-sm font-medium text-gray-700 mb-2">
            Is your home located in a flood plan? *
          </label>
          <select
            id="floodPlan"
            name="floodPlan"
            value={formData.floodPlan}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Choose option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>

        {/* Security, Municipal Location, Fire Alarm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="securitySystem" className="block text-sm font-medium text-gray-700 mb-2">
              Security System *
            </label>
            <select
              id="securitySystem"
              name="securitySystem"
              value={formData.securitySystem}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="none">None</option>
              <option value="monitored">Monitored</option>
              <option value="unmonitored">Unmonitored</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <div>
            <label htmlFor="municipalLocation" className="block text-sm font-medium text-gray-700 mb-2">
              Municipal Location *
            </label>
            <select
              id="municipalLocation"
              name="municipalLocation"
              value={formData.municipalLocation}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="inside-city">Inside City Limits</option>
              <option value="outside-city">Outside City Limits</option>
              <option value="not-sure">Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="fireAlarm" className="block text-sm font-medium text-gray-700 mb-2">
              Fire Alarm *
            </label>
            <select
              id="fireAlarm"
              name="fireAlarm"
              value={formData.fireAlarm}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="none">None</option>
              <option value="monitored">Monitored</option>
              <option value="unmonitored">Unmonitored</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
        </div>

        {/* Dog Breeds */}
        <div>
          <label htmlFor="dogBreeds" className="block text-sm font-medium text-gray-700 mb-2">
            Do you have any of the following breeds of dogs: Chow, Doberman, German Shepherd, Pit Bull, Rottweiler, Wolf Hybrid, or a mix of these? *
          </label>
          <select
            id="dogBreeds"
            name="dogBreeds"
            value={formData.dogBreeds}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Choose option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Policy Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-blue-600 rounded-full p-2">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Policy Information</h3>
          </div>

          {/* Approximate Replacement Cost */}
          <div className="mb-6">
            <label htmlFor="replacementCost" className="block text-sm font-medium text-gray-700 mb-2">
              Approximate Replacement Cost of Dwelling (not including land) *
            </label>
            <input
              type="number"
              id="replacementCost"
              name="replacementCost"
              value={formData.replacementCost}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Replacement value of all possessions"
            />
          </div>

          {/* Personal Liability Coverage and Desired Deductible Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="personalLiability" className="block text-sm font-medium text-gray-700 mb-2">
                Personal Liability Coverage Desired *
              </label>
              <select
                id="personalLiability"
                name="personalLiability"
                value={formData.personalLiability}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="100000">$100,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="desiredDeductible" className="block text-sm font-medium text-gray-700 mb-2">
                Desired Deductible *
              </label>
              <select
                id="desiredDeductible"
                name="desiredDeductible"
                value={formData.desiredDeductible}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Credit Rating */}
          <div className="mb-6">
            <label htmlFor="creditRating" className="block text-sm font-medium text-gray-700 mb-2">
              Credit Rating *
            </label>
            <select
              id="creditRating"
              name="creditRating"
              value={formData.creditRating}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="poor">Poor</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          {/* Claims History */}
          <div className="mb-6">
            <label htmlFor="reportedClaims" className="block text-sm font-medium text-gray-700 mb-2">
              Have you reported any claims or losses to your insurance company within the past 5 years? *
            </label>
            <select
              id="reportedClaims"
              name="reportedClaims"
              value={formData.reportedClaims}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Choose option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Replace Existing Policy and Policy Start Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="replaceExistingPolicy" className="block text-sm font-medium text-gray-700 mb-2">
                Will this insurance replace an existing policy? *
              </label>
              <select
                id="replaceExistingPolicy"
                name="replaceExistingPolicy"
                value={formData.replaceExistingPolicy}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="policyStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                When would you like this policy to start? *
              </label>
              <input
                type="date"
                id="policyStartDate"
                name="policyStartDate"
                value={formData.policyStartDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Submit Button for Building + Policy Information */}
        {!mainFormCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-6"
          >
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue to Additional Information
            </button>
          </motion.div>
        )}

      </form>

      {/* Additional Information Section - Only show after main form is completed */}
      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-center"
        >
          <p className="text-red-600 font-medium">{error}</p>
        </motion.div>
      )}

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-6 bg-green-50 border border-green-200 rounded-md text-center"
        >
          <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Quote Submitted Successfully!</h3>
          <p className="text-green-600">We'll contact you soon with your home insurance quote.</p>
          <button
            onClick={() => {
              reset();
              setMainFormCompleted(false);
              setFormData({
                homeType: '',
                yearBuilt: '',
                squareFootage: '',
                constructionType: '',
                primaryHeating: '',
                foundation: '',
                bedrooms: '',
                roofType: '',
                bathrooms: '',
                roofAge: '',
                stories: '',
                garageType: '',
                DeadBolts: false,
                FireExtinguishers: false,
                Trampoline: false,
                CoveredDeckPatio: false,
                SwimmingPool: false,
                floodPlan: '',
                securitySystem: '',
                municipalLocation: '',
                fireAlarm: '',
                dogBreeds: '',
                replacementCost: '',
                personalLiability: '',
                desiredDeductible: '',
                creditRating: '',
                reportedClaims: '',
                replaceExistingPolicy: '',
                policyStartDate: ''
              });
            }}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Submit Another Quote
          </button>
        </motion.div>
      )}

      {mainFormCompleted && !success && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <HomeAdditionalInformationForm
          onSubmit={handleAdditionalInformationSubmit}
          isSubmitting={submitting}
        />
        </motion.div>
      )}


    </motion.div>
  )
}
