#!/bin/bash

# Check if we're on the main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "❌ Releases can only be made from the 'main' branch"
  echo "Current branch: $CURRENT_BRANCH"
  echo "Please switch to the main branch first: git checkout main"
  exit 1
fi

# Run quality checks
echo "🔍 Running linting..."
pnpm lint || {
  echo "❌ Linting failed"
  exit 1
}

# Generate changelog and bump version
echo "📝 Generating changelog and bumping version..."
changelogen --release --hideAuthorEmail || {
  echo "❌ Changelog generation failed"
  exit 1
}

# Publish to npm
echo "🚀 Publishing to npm..."
npm publish || {
  echo "❌ Publishing failed"
  exit 1
}

# Push changes and tags
echo "⬆️  Pushing changes and tags..."
git push --follow-tags || {
  echo "❌ Failed to push changes"
  exit 1
}

# Create GitHub release using changelogen
echo "🐙 Creating GitHub release..."
changelogen gh release || {
  echo "❌ Failed to create GitHub release"
  exit 1
}

echo "✅ Release completed successfully!"