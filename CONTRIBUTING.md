# Contributing to Twitter Mass Delete Tool

First off, thank you for considering contributing to this project! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**
```
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Run script '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots of console errors.

**Environment:**
 - OS: [e.g. Windows 11, macOS 13]
 - Browser: [e.g. Chrome 119, Firefox 120]
 - Twitter Account Age: [e.g. new, old, verified]

**Additional context**
Any other context about the problem.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- List any alternative solutions you've considered

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, test it thoroughly
3. Ensure your code follows the existing style
4. Update the README.md if needed
5. Write a clear commit message

**Pull Request Template:**
```
**Description**
Brief description of what this PR does.

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

**Testing**
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Edge
- [ ] Tested with different account sizes

**Checklist**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Code Style Guidelines

### JavaScript

- Use ES6+ features
- Use `const` and `let`, never `var`
- Use async/await for asynchronous operations
- Add comments for complex logic
- Use meaningful variable names
- Include JSDoc comments for functions

**Example:**
```javascript
/**
 * Deletes a single tweet by clicking through the UI
 * @param {HTMLElement} button - The "More" button element
 * @returns {Promise<boolean>} True if deleted successfully
 */
async function deleteTweet(button) {
    // Implementation
}
```

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

**Examples:**
```
feat: Add batch size configuration option
fix: Handle edge case when confirm button missing
docs: Update installation instructions
refactor: Simplify deletion loop logic
```

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/twitter-mass-delete.git
   cd twitter-mass-delete
   ```

2. **Create Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Edit the scripts in the `scripts/` folder
   - Test thoroughly in browser console

4. **Test Your Changes**
   - Test on a Twitter account (preferably a test account)
   - Try different scenarios (new account, old account, many tweets, few tweets)
   - Check console for errors
   - Verify rate limits are respected

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub and create a PR
   - Fill in the PR template
   - Wait for review

## Testing Guidelines

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] Script works on fresh Twitter profile
- [ ] Script handles no content gracefully
- [ ] Script respects rate limits (includes delays)
- [ ] Console output is clear and helpful
- [ ] Error handling works for common errors
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Edge

### Edge Cases to Consider

- Empty account (no tweets/likes/retweets)
- Account with only retweets
- Account with pinned tweets
- Very old tweets (3,200+ limit)
- Protected tweets
- Rate limit scenarios

## Project Structure

```
twitter-mass-delete/
├── scripts/
│   ├── delete-tweets.js      # Delete posts and replies
│   ├── unlike-all.js          # Unlike all likes
│   ├── undo-retweets.js       # Undo all retweets
│   └── delete-everything.js   # All-in-one script
├── README.md                  # Main documentation
├── CONTRIBUTING.md            # This file
├── LICENSE                    # MIT License
└── .gitignore                 # Git ignore rules
```

## Feature Ideas

Looking for something to contribute? Here are some ideas:

### High Priority
- [ ] Add selective deletion by date range
- [ ] Add keyword-based filtering
- [ ] Improve error handling
- [ ] Add progress bar/percentage
- [ ] Export deleted tweet IDs for records

### Medium Priority
- [ ] Add dry-run mode (preview what will be deleted)
- [ ] Improve rate limit handling
- [ ] Add better logging/export logs
- [ ] Create browser extension version
- [ ] Add undo/pause functionality

### Low Priority
- [ ] Add themes for console output
- [ ] Create GUI version
- [ ] Add statistics dashboard
- [ ] Multi-language support

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion in GitHub Discussions
- Comment on existing issues

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

Thank you for contributing! 🙏
