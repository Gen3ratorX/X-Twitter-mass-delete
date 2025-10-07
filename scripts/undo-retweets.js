/**
 * Twitter Mass Delete - Undo All Retweets
 * 
 * USAGE:
 * 1. Go to your Twitter profile (twitter.com/yourusername)
 * 2. Open browser console (F12 or Ctrl+Shift+J)
 * 3. Copy and paste this entire script
 * 4. Press Enter
 * 5. Reload page and run again when batch completes
 * 
 * WARNING: This will undo all your retweets. Cannot be undone!
 */

(async function() {
    'use strict';
    
    console.log(`
╔════════════════════════════════════════╗
║   TWITTER MASS DELETE - RETWEETS       ║
║   Undo All Retweets                    ║
╚════════════════════════════════════════╝
    `);
    
    // Configuration
    const CONFIG = {
        DELAY_BETWEEN_ACTIONS: 1500,  // 1.5 seconds
        DELAY_AFTER_CLICK: 500,       // 0.5 seconds
        MAX_BATCHES: 50,              // Process 50 batches per run
        SCROLL_DELAY: 2000            // 2 seconds
    };
    
    // Utility function for delays
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    // Statistics
    let stats = {
        undone: 0,
        errors: 0,
        startTime: Date.now()
    };
    
    // Main undo retweets function
    async function undoRetweets() {
        console.log('🔄 Starting undo retweets process...');
        console.log('⏱️  This will take time. Please be patient.\n');
        
        for (let batch = 0; batch < CONFIG.MAX_BATCHES; batch++) {
            console.log(`📦 Processing batch ${batch + 1}/${CONFIG.MAX_BATCHES}...`);
            
            // Find all "Unretweet" buttons (green retweet icon)
            const unretweetButtons = document.querySelectorAll('[data-testid="unretweet"]');
            
            if (unretweetButtons.length === 0) {
                console.log('⚠️  No more retweets visible on this page.');
                console.log('💡 Reload the page and run the script again to continue.');
                break;
            }
            
            console.log(`   Found ${unretweetButtons.length} retweets in this batch.`);
            
            // Process each retweet
            for (let i = 0; i < unretweetButtons.length; i++) {
                const button = unretweetButtons[i];
                
                try {
                    // Click unretweet button
                    button.click();
                    await delay(CONFIG.DELAY_AFTER_CLICK);
                    
                    // Confirm unretweet
                    const confirmButton = document.querySelector('[data-testid="unretweetConfirm"]');
                    if (confirmButton) {
                        confirmButton.click();
                        stats.undone++;
                        console.log(`   ✅ Undone retweet #${stats.undone}`);
                        await delay(CONFIG.DELAY_BETWEEN_ACTIONS);
                    } else {
                        console.log('   ⚠️  Confirmation button not found');
                    }
                    
                } catch (error) {
                    stats.errors++;
                    console.log(`   ❌ Error: ${error.message}`);
                }
            }
            
            // Scroll to load more retweets
            console.log('   📜 Scrolling to load more retweets...');
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
   🔄 Undone: ${stats.undone} retweets
   ❌ Errors: ${stats.errors}
   ⏱️  Time: ${minutes}m ${seconds}s

💡 Next Steps:
   1. Reload the page (F5 or Ctrl+R)
   2. Run this script again
   3. Repeat until no more retweets remain

⚠️  Note: Twitter only loads ~20-50 tweets at a time.
    You may need to run this script multiple times.
        `);
    }
    
    // Start the undo retweets process
    await undoRetweets();
    
})();
