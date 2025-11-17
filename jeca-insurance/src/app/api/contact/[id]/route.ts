import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), '.data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
    if (!fs.existsSync(CONTACTS_FILE)) {
      fs.writeFileSync(CONTACTS_FILE, '[]', 'utf-8')
    }
  } catch {}
}

function readContacts(): any[] {
  try {
    ensureDataFile()
    const raw = fs.readFileSync(CONTACTS_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeContacts(contacts: any[]) {
  try {
    ensureDataFile()
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8')
  } catch {}
}

export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const contacts = readContacts()
  const found = contacts.find((c: any) => c.id === id)
  if (!found) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(found)
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  try {
    const payload = await req.json()
    const status = typeof payload.status === 'string' ? payload.status.trim() : ''
    if (!status) return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    const contacts = readContacts()
    const idx = contacts.findIndex((c: any) => c.id === id)
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    contacts[idx] = { ...contacts[idx], status }
    writeContacts(contacts)
    return NextResponse.json(contacts[idx])
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}