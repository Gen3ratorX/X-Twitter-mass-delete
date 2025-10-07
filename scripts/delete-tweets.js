/**
 * Twitter Mass Delete - Delete Tweets & Replies
 * 
 * USAGE:
 * 1. Go to your Twitter profile (twitter.com/yourusername)
 * 2. Open browser console (F12 or Ctrl+Shift+J)
 * 3. Copy and paste this entire script
 * 4. Press Enter
 * 5. Reload page and run again when batch completes
 * 
 * WARNING: This will permanently delete your tweets. Backup first!
 */

(async function() {
    'use strict';
    
    console.log(`
╔════════════════════════════════════════╗
║   TWITTER MASS DELETE - TWEETS         ║
║   Delete Posts & Replies               ║
╚════════════════════════════════════════╝
    `);
    
    // Configuration
    const CONFIG = {
        DELAY_BETWEEN_ACTIONS: 2000,  // 2 seconds
        DELAY_AFTER_CLICK: 500,       // 0.5 seconds
        MAX_BATCHES: 50,              // Process 50 batches per run
        SCROLL_DELAY: 2000            // 2 seconds
    };
    
    // Utility function for delays
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    // Statistics
    let stats = {
        deleted: 0,
        errors: 0,
        startTime: Date.now()
    };
    
    // Main deletion function
    async function deleteTweetsAndReplies() {
        console.log('🗑️  Starting deletion process...');
        console.log('⏱️  This will take time. Please be patient.\n');
        
        for (let batch = 0; batch < CONFIG.MAX_BATCHES; batch++) {
            console.log(`📦 Processing batch ${batch + 1}/${CONFIG.MAX_BATCHES}...`);
            
            // Find all "More" buttons (three dots menu)
            const moreButtons = document.querySelectorAll('[aria-label="More"]');
            
            if (moreButtons.length === 0) {
                console.log('⚠️  No more tweets visible on this page.');
                console.log('💡 Reload the page and run the script again to continue.');
                break;
            }
            
            console.log(`   Found ${moreButtons.length} tweets in this batch.`);
            
            // Process each tweet
            for (let i = 0; i < moreButtons.length; i++) {
                const button = moreButtons[i];
                
                try {
                    // Click the "More" menu
                    button.click();
                    await delay(CONFIG.DELAY_AFTER_CLICK);
                    
                    // Find and click "Delete" option
                    const menuItems = document.querySelectorAll('[role="menuitem"]');
                    let deleteClicked = false;
                    
                    for (let item of menuItems) {
                        const text = item.textContent || item.innerText;
                        if (text && text.includes('Delete')) {
                            item.click();
                            deleteClicked = true;
                            await delay(CONFIG.DELAY_AFTER_CLICK);
                            break;
                        }
                    }
                    
                    if (!deleteClicked) {
                        console.log('   ⚠️  Delete option not found, skipping...');
                        continue;
                    }
                    
                    // Confirm deletion
                    const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
                    if (confirmButton) {
                        confirmButton.click();
                        stats.deleted++;
                        console.log(`   ✅ Deleted tweet #${stats.deleted}`);
                        await delay(CONFIG.DELAY_BETWEEN_ACTIONS);
                    } else {
                        console.log('   ⚠️  Confirmation button not found');
                    }
                    
                    // Close any remaining menus
                    const closeButton = document.querySelector('[aria-label="Close"]');
                    if (closeButton) {
                        closeButton.click();
                        await delay(200);
                    }
                    
                } catch (error) {
                    stats.errors++;
                    console.log(`   ❌ Error: ${error.message}`);
                }
            }
            
            // Scroll to load more tweets
            console.log('   📜 Scrolling to load more tweets...');
            window.scrollTo(0, document.body.scrollHeight);
            await delay(CONFIG.SCROLL_DELAY);
        }
        
        // Print final statistics
        printStats();
    }
    
    // Print statistics
    function printStats() {
        const elapsed = Math.round((Date.now() - stats.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        console.log(`
╔════════════════════════════════════════╗
║           BATCH COMPLETE!              ║
╚════════════════════════════════════════╝

📊 Statistics:
   ✅ Deleted: ${stats.deleted} tweets
   ❌ Errors: ${stats.errors}
   ⏱️  Time: ${minutes}m ${seconds}s

💡 Next Steps:
   1. Reload the page (F5 or Ctrl+R)
   2. Run this script again
   3. Repeat until no more tweets remain

⚠️  Note: Twitter only loads ~20-50 tweets at a time.
    For large accounts, you may need to run this 20-50+ times.
        `);
    }
    
    // Start the deletion process
    await deleteTweetsAndReplies();
    
})();
