/**
 * @project AncestorTree
 * @file src/app/api/health/route.ts
 * @description Health check endpoint — keeps Supabase free tier alive via Vercel Cron.
 *              Called every 5 days by vercel.json cron schedule.
 * @version 1.0.0
 * @updated 2026-02-26
 */

import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function GET() {
  // Skip DB ping in desktop mode
  if (process.env.NEXT_PUBLIC_DESKTOP_MODE === 'true') {
    return NextResponse.json({ status: 'ok', mode: 'desktop' });
  }

  try {
    const supabase = createServiceRoleClient();
    // Lightweight query — just checks DB is reachable
    const { error } = await supabase.from('profiles').select('id').limit(1);

    if (error) {
      return NextResponse.json({ status: 'error', message: error.message }, { status: 503 });
    }

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: err instanceof Error ? err.message : 'Unknown error' },
      { status: 503 }
    );
  }
}
