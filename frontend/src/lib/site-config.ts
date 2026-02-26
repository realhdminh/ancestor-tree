/**
 * @project AncestorTree
 * @file src/lib/site-config.ts
 * @description Central site identity config — reads from env vars with fallback defaults.
 *              All clan-specific text should be sourced from here, not hardcoded.
 * @version 1.0.0
 * @updated 2026-02-26
 */

export const siteConfig = {
  /** Tên dòng họ — NEXT_PUBLIC_CLAN_NAME */
  clanName: process.env.NEXT_PUBLIC_CLAN_NAME ?? 'Họ Đặng',

  /** Tên làng / địa danh — NEXT_PUBLIC_CLAN_LOCATION */
  clanLocation: process.env.NEXT_PUBLIC_CLAN_LOCATION ?? 'làng Kỷ Các',

  /** Tên ứng dụng — NEXT_PUBLIC_APP_TITLE */
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE ?? 'Gia Phả Điện Tử',

  /** Khẩu hiệu — NEXT_PUBLIC_APP_TAGLINE */
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE ?? 'Gìn giữ tinh hoa - Tiếp bước cha ông',

  /** Mô tả SEO — NEXT_PUBLIC_APP_DESCRIPTION */
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    'Phần mềm quản lý gia phả điện tử. Lưu trữ thông tin dòng họ, cây gia phả, lịch giỗ chạp.',

  /** Chữ cái viết tắt hiển thị trong avatar sidebar (lấy từ clanName nếu không set) */
  get avatarLetter() {
    return process.env.NEXT_PUBLIC_CLAN_AVATAR_LETTER ?? this.clanName.charAt(0);
  },

  /** Full title — kết hợp appTitle + clanName + clanLocation */
  get fullTitle() {
    return `${this.appTitle} - ${this.clanName} ${this.clanLocation}`;
  },
} as const;
