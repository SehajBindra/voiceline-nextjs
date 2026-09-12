#!/usr/bin/env bash
set -euo pipefail

# Voiceline uses Bun (see bun.lock) as its package manager. The Cloud Agent
# default image ships Node but not Bun, so install Bun idempotently here.
export BUN_INSTALL="${BUN_INSTALL:-$HOME/.bun}"
export PATH="$BUN_INSTALL/bin:$PATH"

if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
fi

bun --version

# Install dependencies exactly as pinned by the committed lockfile.
bun install --frozen-lockfile
