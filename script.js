// Simple and Direct JavaScript for Digital Marketing Platform
// Fixed Navigation Implementation

// Global variables
let currentSection = 'dashboard';

// Simple initialization
function initPlatform() {
    console.log('🚀 Initializing Digital Marketing Platform...');

    // Setup navigation immediately
    setupNavigation();

    // Setup sidebar functionality
    setupSidebar();

    // Setup other features
    setupAIChat();
    setupQuickActions();

    // Show dashboard by default
    showSection('dashboard');

    console.log('✅ Platform initialized successfully');
}

// Simple navigation setup
function setupNavigation() {
    console.log('📍 Setting up navigation...');

    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    console.log(`Found ${navLinks.length} navigation links`);

    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        console.log(`Setting up link ${index}: ${href}`);

        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = href.substring(1); // Remove #
            console.log(`🔗 Navigating to: ${sectionId}`);

            // Update navigation
            updateNavigation(sectionId, this);

            // Show section
            showSection(sectionId);

            // Close mobile sidebar
            closeMobileSidebar();

            // Show notification
            showNotification(`Navigasi ke ${getNavText(this)}`, 'success');
        });
    });

    console.log('✅ Navigation setup complete');
}

// Update navigation active state
function updateNavigation(sectionId, clickedLink) {
    // Remove active from all links
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active to clicked link
    clickedLink.classList.add('active');

    // Update header title
    const navText = getNavText(clickedLink);
    const headerTitle = document.querySelector('.header-title h1');
    if (headerTitle) {
        headerTitle.textContent = navText;
    }

    // Update current section
    currentSection = sectionId;
}

// Get navigation text
function getNavText(navLink) {
    const navTextElement = navLink.querySelector('.nav-text');
    return navTextElement ? navTextElement.textContent : navLink.textContent.trim();
}

// Show specific section
function showSection(sectionId) {
    console.log(`📄 Showing section: ${sectionId}`);

    // Hide all sections
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log(`✅ Section ${sectionId} is now active`);

        // Initialize section-specific features
        initSectionFeatures(sectionId);
    } else {
        console.error(`❌ Section ${sectionId} not found`);
    }
}

// Initialize section-specific features
function initSectionFeatures(sectionId) {
    console.log(`🔧 Initializing features for: ${sectionId}`);

    switch(sectionId) {
        case 'courses':
            initCoursesSection();
            break;
        case 'students':
            initStudentsSection();
            break;
        case 'ai-assistant':
            initAISection();
            break;
        case 'analytics':
            initAnalyticsSection();
            break;
        default:
            // Dashboard or other sections
            break;
    }
}

// Setup sidebar functionality
function setupSidebar() {
    console.log('📱 Setting up sidebar...');

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleSidebar);
    }

    // Sidebar close button
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', closeSidebar);
    }

    // Overlay click to close sidebar
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });

    console.log('✅ Sidebar setup complete');
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent body scroll when sidebar is open on mobile
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close mobile sidebar after navigation
function closeMobileSidebar() {
    if (window.innerWidth <= 1024) {
        closeSidebar();
    }
}

// Setup AI Chat functionality
function setupAIChat() {
    console.log('🤖 Setting up AI Chat...');

    const aiChatBtn = document.querySelector('.ai-chat-btn');
    const modal = document.getElementById('aiChatModal');
    const modalClose = document.querySelector('.modal-close');
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');

    // Open modal
    if (aiChatBtn) {
        aiChatBtn.addEventListener('click', function() {
            if (modal) {
                modal.classList.add('active');
                if (chatInput) chatInput.focus();
            }
        });
    }

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (modal) modal.classList.remove('active');
        });
    }

    // Close modal on backdrop click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Send message
    function sendMessage() {
        if (chatInput) {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage(message, 'user');
                chatInput.value = '';

                // Simulate AI response
                setTimeout(() => {
                    generateAIResponse(message);
                }, 1000);
            }
        }
    }

    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    console.log('✅ AI Chat setup complete');
}

// Add chat message
function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatar = sender === 'user' ?
        '<div class="message-avatar"><i class="fas fa-user"></i></div>' :
        '<div class="message-avatar"><i class="fas fa-robot"></i></div>';

    messageDiv.innerHTML = `
        ${avatar}
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate AI response
function generateAIResponse(userMessage) {
    const responses = {
        'hello': 'Halo! Saya AI Teaching Assistant Anda. Bagaimana saya bisa membantu dengan pembelajaran digital marketing hari ini?',
        'help': 'Saya dapat membantu Anda dengan:\n• Analisis performa mahasiswa\n• Rekomendasi konten pembelajaran\n• Penjadwalan kelas\n• Grading otomatis\n• Insights pembelajaran',
        'analytics': 'Berdasarkan data terbaru:\n• Engagement rate meningkat 23%\n• 15 mahasiswa membutuhkan bantuan tambahan pada materi SEO\n• Waktu optimal posting: 09:00-11:00',
        'students': 'Saat ini Anda memiliki 156 mahasiswa aktif. 24 tugas pending review, dan 89% tingkat completion rate untuk minggu ini.',
        'default': 'Terima kasih atas pertanyaannya! Sebagai AI Assistant, saya siap membantu Anda mengoptimalkan pembelajaran digital marketing. Bisakah Anda lebih spesifik tentang apa yang ingin Anda ketahui?'
    };

    const lowerMessage = userMessage.toLowerCase();
    let response = responses.default;

    // Simple keyword matching
    for (const [key, value] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            response = value;
            break;
        }
    }

    addChatMessage(response, 'ai');
}

// Setup quick actions
function setupQuickActions() {
    console.log('⚡ Setting up quick actions...');

    const actionBtns = document.querySelectorAll('.action-btn');

    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const actionText = this.querySelector('span').textContent;
            handleQuickAction(actionText);
        });
    });

    console.log('✅ Quick actions setup complete');
}

// Handle quick action
function handleQuickAction(action) {
    const actions = {
        'Buat Quiz Baru': () => showNotification('Membuka form quiz baru...', 'info'),
        'Upload Materi': () => showNotification('Membuka file uploader...', 'info'),
        'Buat Pengumuman': () => showNotification('Membuka editor pengumuman...', 'info'),
        'Jadwalkan Kelas': () => showNotification('Membuka kalender kelas...', 'info'),
        'Kelola Mahasiswa': () => showNotification('Membuka manajemen mahasiswa...', 'info'),
        'Pengaturan': () => showNotification('Membuka pengaturan platform...', 'info')
    };

    if (actions[action]) {
        actions[action]();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'info' ? 'info-circle' : type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'info' ? '#3B82F6' : type === 'success' ? '#10B981' : '#F59E0B'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize courses section
function initCoursesSection() {
    console.log('📚 Initializing courses section...');

    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const manageBtn = card.querySelector('.btn-primary');
        const editBtn = card.querySelector('.btn-outline');

        if (manageBtn) {
            manageBtn.addEventListener('click', function() {
                const courseName = card.querySelector('.course-title').textContent;
                showNotification(`Membuka manajemen ${courseName}`, 'info');
            });
        }

        if (editBtn) {
            editBtn.addEventListener('click', function() {
                const courseName = card.querySelector('.course-title').textContent;
                showNotification(`Mengedit ${courseName}`, 'info');
            });
        }
    });
}

// Initialize students section
function initStudentsSection() {
    console.log('👥 Initializing students section...');

    // Setup student table interactions
    const actionButtons = document.querySelectorAll('.students-table .btn-icon');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = btn.getAttribute('title');
            const studentRow = btn.closest('tr');
            const studentName = studentRow.querySelector('.student-name').textContent;

            showNotification(`${action}: ${studentName}`, 'info');
        });
    });

    // Setup filters
    const filterSelects = document.querySelectorAll('.filter-select');
    const searchFilter = document.querySelector('.search-filter');

    filterSelects.forEach(select => {
        select.addEventListener('change', filterStudents);
    });

    if (searchFilter) {
        searchFilter.addEventListener('input', debounce(filterStudents, 300));
    }

    // Setup pagination
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            pageNumbers.forEach(p => p.classList.remove('active'));
            pageBtn.classList.add('active');
            showNotification(`Halaman ${pageBtn.textContent}`, 'info');
        });
    });
}

// Filter students
function filterStudents() {
    console.log('🔍 Filtering students...');
    showNotification('Filter diterapkan', 'success');
}

// Initialize AI section
function initAISection() {
    console.log('🤖 Initializing AI section...');

    // Setup AI feature cards
    const featureCards = document.querySelectorAll('.ai-feature-card');
    featureCards.forEach(card => {
        const btn = card.querySelector('.btn');
        const featureName = card.querySelector('h3').textContent;

        if (btn) {
            btn.addEventListener('click', function() {
                showNotification(`Membuka ${featureName}`, 'info');
            });
        }
    });

    // Setup AI chat in section
    const chatSendBtn = document.querySelector('.chat-send-button');
    const chatInput = document.querySelector('.chat-input-field');

    function sendAIMessage() {
        if (chatInput) {
            const message = chatInput.value.trim();
            if (message) {
                addAIChatMessage(message, 'user');
                chatInput.value = '';

                // Simulate AI response
                setTimeout(() => {
                    generateAIResponse(message);
                }, 1000);
            }
        }
    }

    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', sendAIMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendAIMessage();
            }
        });
    }
}

// Add AI chat message (for AI section)
function addAIChatMessage(message, sender) {
    const chatMessages = document.querySelector('.ai-chat-messages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}-message`;

    const avatar = sender === 'user' ?
        '<div class="message-avatar"><i class="fas fa-user"></i></div>' :
        '<div class="message-avatar"><i class="fas fa-robot"></i></div>';

    messageDiv.innerHTML = `
        ${avatar}
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize analytics section
function initAnalyticsSection() {
    console.log('📊 Initializing analytics section...');

    // Animate analytics cards
    const analyticsCards = document.querySelectorAll('.analytics-card');
    analyticsCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Setup period selector
    const periodSelector = document.querySelector('.analytics-overview .period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', function(e) {
            updateAnalytics(e.target.value);
        });
    }
}

// Update analytics
function updateAnalytics(period) {
    console.log(`📈 Updating analytics for period: ${period}`);
    showNotification(`Analytics diperbarui untuk ${period}`, 'success');

    // Simulate data update with animation
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        bar.style.transform = 'scaleY(0)';
        setTimeout(() => {
            bar.style.transform = 'scaleY(1)';
        }, Math.random() * 500);
    });
}

// Utility function: debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}











// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Content Loaded, initializing platform...');

    // Initialize platform
    initPlatform();

    // Make global navigation function available
    window.navigateTo = function(sectionId) {
        console.log('🔧 Manual navigation to:', sectionId);
        showSection(sectionId);

        // Update nav active state
        document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
        const targetLink = document.querySelector(`[href="#${sectionId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');

            // Update header title
            const navText = getNavText(targetLink);
            const headerTitle = document.querySelector('.header-title h1');
            if (headerTitle) {
                headerTitle.textContent = navText;
            }
        }
    };

    // Make functions globally available for debugging
    window.showSection = showSection;
    window.toggleSidebar = toggleSidebar;
    window.closeSidebar = closeSidebar;

    console.log('✅ Platform initialized successfully');
    console.log('🔧 Debug: Use window.navigateTo("sectionId") to test navigation');
});





// Keep minimal debug functions for development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Debug functions only available in development
    window.testNav = function(sectionId) {
        console.log(`🧪 Testing navigation to: ${sectionId}`);
        showSection(sectionId);

        // Update nav state
        document.querySelectorAll('.sidebar .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.checkAllSections = function() {
        const sections = ['dashboard', 'courses', 'students', 'ai-assistant', 'analytics', 'assignments', 'discussions', 'settings'];
        console.log('🔍 Checking sections...');

        let foundCount = 0;
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) foundCount++;
            console.log(`${sectionId}: ${section ? '✅' : '❌'}`);
        });

        console.log(`Total: ${foundCount}/${sections.length} sections found`);
    };
}

// Export for module usage (commented out for compatibility)
// export { DigitalMarketingPlatform, utils };
