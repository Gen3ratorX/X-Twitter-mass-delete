/**
 * Twitter Mass Delete - Unlike All Likes
 * 
 * USAGE:
 * 1. Go to your Twitter likes page (twitter.com/yourusername/likes)
 * 2. Open browser console (F12 or Ctrl+Shift+J)
 * 3. Copy and paste this entire script
 * 4. Press Enter
 * 5. Reload page and run again when batch completes
 * 
 * WARNING: This will unlike all your liked tweets. Cannot be undone!
 */

(async function() {
    'use strict';
    
    console.log(`
╔════════════════════════════════════════╗
║   TWITTER MASS DELETE - LIKES          ║
║   Unlike All Liked Tweets              ║
╚════════════════════════════════════════╝
    `);
    
    // Configuration
    const CONFIG = {
        DELAY_BETWEEN_ACTIONS: 1000,  // 1 second
        MAX_BATCHES: 50,              // Process 50 batches per run
        SCROLL_DELAY: 2000            // 2 seconds
    };
    
    // Utility function for delays
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    // Statistics
    let stats = {
        unliked: 0,
        errors: 0,
        startTime: Date.now()
    };
    
    // Main unlike function
    async function unlikeAll() {
        console.log('💔 Starting unlike process...');
        console.log('⏱️  This will take time. Please be patient.\n');
        
        for (let batch = 0; batch < CONFIG.MAX_BATCHES; batch++) {
            console.log(`📦 Processing batch ${batch + 1}/${CONFIG.MAX_BATCHES}...`);
            
            // Find all "Unlike" buttons (filled heart icons)
            const unlikeButtons = document.querySelectorAll('[data-testid="unlike"]');
            
            if (unlikeButtons.length === 0) {
                console.log('⚠️  No more likes visible on this page.');
                console.log('💡 Reload the page and run the script again to continue.');
                break;
            }
            
            console.log(`   Found ${unlikeButtons.length} likes in this batch.`);
            
            // Process each like
            for (let i = 0; i < unlikeButtons.length; i++) {
                const button = unlikeButtons[i];
                
                try {
                    // Click unlike button
                    button.click();
                    stats.unliked++;
                    console.log(`   ✅ Unliked tweet #${stats.unliked}`);
                    await delay(CONFIG.DELAY_BETWEEN_ACTIONS);
                    
                } catch (error) {
                    stats.errors++;
                    console.log(`   ❌ Error: ${error.message}`);
                }
            }
            
            // Scroll to load more likes
            console.log('   📜 Scrolling to load more likes...');
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
   💔 Unliked: ${stats.unliked} tweets
   ❌ Errors: ${stats.errors}
   ⏱️  Time: ${minutes}m ${seconds}s

💡 Next Steps:
   1. Reload the page (F5 or Ctrl+R)
   2. Run this script again
   3. Repeat until no more likes remain

⚠️  Note: Twitter only loads ~20-50 likes at a time.
    For accounts with many likes, you may need to run this many times.
        `);
    }
    
    // Start the unlike process
    await unlikeAll();
    
})();
