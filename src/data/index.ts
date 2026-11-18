import type { CompanyConfig } from '../types';
import companiesData from '../data/companies.json';

export function getCompanies(): CompanyConfig[] {
  return companiesData.companies;
}

export function getCompanyById(id: string): CompanyConfig | undefined {
  return companiesData.companies.find((company) => company.id === id);
}

export function getCompanyIds(): string[] {
  return companiesData.companies.map((company) => company.id);
}
