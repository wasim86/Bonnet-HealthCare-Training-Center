import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), '.data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

function readContacts(): any[] {
  try {
    if (!fs.existsSync(CONTACTS_FILE)) return []
    const raw = fs.readFileSync(CONTACTS_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function GET(_req: Request, context: { params: { id: string } }) {
  const { id } = context.params
  const contacts = readContacts()
  const found = contacts.find((c: any) => c.id === id)
  if (!found) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(found)
}