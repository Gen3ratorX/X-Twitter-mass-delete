# Twitter Mass Delete Tool 🗑️

#  Delete all your Twitter posts, replies, retweets, and likes with simple browser scripts.

No API keys required. No installations needed. Just copy, paste, and clean up your Twitter history.

---

## ✨ Features

- 🗑️ **Delete Posts & Replies** - Remove all your tweets and replies
- 💔 **Unlike All Likes** - Remove all liked tweets
- 🔄 **Undo Retweets** - Undo all your retweets
- 🆓 **Completely Free** - No subscriptions or payments
- 🔒 **Privacy First** - Runs locally in your browser
- ⚡ **No API Required** - No developer account needed
- 🛡️ **Rate Limit Safe** - Built-in delays to prevent account suspension

---

## ⚠️ Important Warning

**This action is PERMANENT and cannot be undone!**

Before using these scripts:
1. Download your Twitter archive as a backup
2. Review what you're about to delete
3. Consider making your account private instead
4. Be absolutely certain you want to proceed

---

## 🚀 Quick Start

### Prerequisites
- Desktop computer (Windows, Mac, or Linux)
- Modern browser (Chrome, Firefox, or Edge)
- Twitter account (logged in)

### Basic Usage

1. **Backup Your Data** (Optional but recommended)
   - Go to Twitter Settings → Your Account → Download archive
   - Wait for email and download the ZIP file

2. **Open Twitter in Browser**
   - Navigate to your profile or relevant page
   - Stay logged in

3. **Open Developer Console**
   - **Windows:** Press `F12` or `Ctrl + Shift + J`
   - **Mac:** Press `Cmd + Option + J`

4. **Choose Your Script**
   - Copy the appropriate script from the `scripts/` folder
   - Paste into console and press Enter
   - Watch it work!

---

## 📁 Available Scripts

### 1. Delete Posts & Replies
**File:** [`scripts/delete-tweets.js`](scripts/delete-tweets.js)

**Usage:**
1. Go to your profile: `twitter.com/yourusername`
2. Open console (F12)
3. Copy and paste the script
4. Press Enter

**What it does:** Deletes all your tweets and replies in batches. Reload and run again for more.

---

### 2. Unlike All Likes
**File:** [`scripts/unlike-all.js`](scripts/unlike-all.js)

**Usage:**
1. Go to your likes: `twitter.com/yourusername/likes`
2. Open console (F12)
3. Copy and paste the script
4. Press Enter

**What it does:** Unlikes all tweets you've liked. Reload and run again for more.

---

### 3. Undo All Retweets
**File:** [`scripts/undo-retweets.js`](scripts/undo-retweets.js)

**Usage:**
1. Go to your profile: `twitter.com/yourusername`
2. Open console (F12)
3. Copy and paste the script
4. Press Enter

**What it does:** Undoes all your retweets. Reload and run again for more.

---

### 4. Delete Everything (All-in-One)
**File:** [`scripts/delete-everything.js`](scripts/delete-everything.js)

**Usage:**
- Interactive script with menu
- Follow on-screen instructions
- Deletes posts, likes, and retweets sequentially

---

## 📖 Detailed Instructions

### Step-by-Step Guide

#### 1. Preparation
```
□ Download Twitter archive (backup)
□ Choose which content to delete
□ Set aside 30-60 minutes
□ Keep browser window active
```

#### 2. Delete Posts
1. Navigate to `twitter.com/yourusername`
2. Open console (F12)
3. Copy [`delete-tweets.js`](scripts/delete-tweets.js)
4. Paste in console, press Enter
5. Wait for batch to complete
6. Reload page (F5)
7. Repeat steps 3-6 until no more tweets

#### 3. Unlike Likes
1. Navigate to `twitter.com/yourusername/likes`
2. Open console (F12)
3. Copy [`unlike-all.js`](scripts/unlike-all.js)
4. Paste in console, press Enter
5. Wait for batch to complete
6. Reload page (F5)
7. Repeat steps 3-6 until no more likes

#### 4. Undo Retweets
1. Navigate to `twitter.com/yourusername`
2. Open console (F12)
3. Copy [`undo-retweets.js`](scripts/undo-retweets.js)
4. Paste in console, press Enter
5. Wait for batch to complete
6. Reload page (F5)
7. Repeat steps 3-6 until no more retweets

---

## ⏱️ Time Estimates

| Volume | Estimated Time |
|--------|----------------|
| 100 items | 5-10 minutes |
| 1,000 items | 1-2 hours |
| 10,000 items | 10-20 hours |
| 50,000+ items | Multiple days |

**Note:** Times include mandatory 1-2 second delays between actions to avoid Twitter rate limits.

---

## 🔧 Troubleshooting

### "Script stopped working"
**Solution:** This is normal! Twitter only loads ~20-50 items at a time.
- Simply reload the page
- Run the script again
- Repeat until done

### "Console says 'No more tweets' but I have more"
**Solution:** Twitter progressively loads content.
- Keep running the script
- Each run will delete the next batch
- For 1,000+ tweets, expect to run 20-50+ times

### "Getting errors in console"
**Solution:**
- Refresh the page and try again
- Clear browser cache (Ctrl+Shift+Del)
- Try a different browser
- Make sure you're logged in

### "My account got temporarily locked"
**Solution:** You deleted too fast (though scripts have built-in delays).
- Wait 12-24 hours
- Twitter will unlock automatically
- Resume deletion more slowly

### "Some tweets won't delete"
**Solution:**
- Very old tweets (3,200+ limit) may be inaccessible
- Retweets with quotes may need manual deletion
- Try running script multiple times

---

## 🛡️ Safety Features

All scripts include:
- ✅ Built-in rate limiting (1-2 second delays)
- ✅ Batch processing to prevent overload
- ✅ Error handling and logging
- ✅ Progress tracking in console
- ✅ Safe to interrupt and resume

---

## 💡 Tips & Best Practices

### Before Deletion
- **Backup first:** Always download your Twitter archive
- **Test small:** Delete a few items first to verify it works
- **Peak hours:** Avoid peak Twitter usage times for better performance

### During Deletion
- **Be patient:** Large volumes take time
- **Stay active:** Keep browser tab open and active
- **Take breaks:** Run for 30 min, pause 15 min to avoid rate limits
- **Don't multi-task:** Don't run multiple scripts simultaneously

### After Deletion
- **Verify:** Check your profile to confirm deletion
- **Wait:** May take few minutes for Twitter to update
- **Privacy:** Consider making account private
- **Fresh start:** Update bio and profile for new beginning

---

## 📊 FAQ

**Q: Is this safe to use?**
A: Yes! Scripts run locally in your browser. No data is sent anywhere except to Twitter's own API to delete your content.

**Q: Do I need a Twitter API key?**
A: No! These browser scripts work directly through Twitter's web interface.

**Q: Can I recover deleted content?**
A: No! Deletion is permanent. Download your archive first if you want a backup.

**Q: Will this get my account banned?**
A: No, if used properly. Scripts include delays to respect rate limits. Don't modify the delays.

**Q: How many times do I need to run the script?**
A: Multiple times. Each run deletes a batch. Keep running until no more content appears.

**Q: Can I use this on mobile?**
A: No. These scripts require desktop browser console access.

**Q: What about tweets older than 3,200?**
A: Twitter's API limits access to the most recent 3,200 tweets. Very old tweets may not be accessible.

**Q: Can I delete selectively (by date/keyword)?**
A: Not with these scripts. They delete everything. For selective deletion, use paid tools like TweetDelete or Redact.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚖️ Disclaimer

This tool is provided "as is" without warranty of any kind. Use at your own risk.

- We are not responsible for any account suspensions or data loss
- Always backup your data before deletion
- Deletion is permanent and cannot be undone
- This tool is not affiliated with Twitter/X

---

## 🌟 Star History

If this tool helped you clean up your Twitter, please consider giving it a star! ⭐

---

## 📞 Support

- 🐛 [Report Issues](https://github.com/gen3ratorx/twitter-mass-delete/issues)
- 💬 [Discussions](https://github.com/gen3ratorx/twitter-mass-delete/discussions)

---

## 🙏 Acknowledgments

- Inspired by the need for privacy and digital hygiene
- Thanks to all contributors and users
- Built for people who want control over their digital footprint

---

**Made with ❤️ for digital privacy**

*Last updated: October 2025*
