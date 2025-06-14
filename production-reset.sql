-- Production Database Reset Script
-- Run this script to clear all test data before production launch
-- WARNING: This will delete ALL user and vendor data

-- Disable foreign key checks temporarily
SET session_replication_role = replica;

-- Clear all user-related data
TRUNCATE TABLE vendor_connections RESTART IDENTITY CASCADE;
TRUNCATE TABLE vendor_interactions RESTART IDENTITY CASCADE;
TRUNCATE TABLE ai_call_logs RESTART IDENTITY CASCADE;
TRUNCATE TABLE appointments RESTART IDENTITY CASCADE;
TRUNCATE TABLE search_sessions RESTART IDENTITY CASCADE;
TRUNCATE TABLE vendor_review_analysis RESTART IDENTITY CASCADE;
TRUNCATE TABLE vendors RESTART IDENTITY CASCADE;
TRUNCATE TABLE users RESTART IDENTITY CASCADE;

-- Clear sessions but keep subscription plans
TRUNCATE TABLE sessions;

-- Re-enable foreign key checks
SET session_replication_role = DEFAULT;

-- Reset beta vendor counter by ensuring first 5 new vendors get beta status
-- (The application logic will handle this automatically)

-- Optional: Insert fresh subscription plans
INSERT INTO subscription_plans (name, price, type, features, is_active) VALUES
('Customer Monthly', 5.00, 'customer', '{"unlimited_searches": true, "priority_support": true}', true),
('Vendor Monthly', 29.00, 'vendor', '{"unlimited_calls": true, "crm_access": true, "analytics": true, "priority_listing": true}', true)
ON CONFLICT DO NOTHING;

-- Verify reset
SELECT 'Users' as table_name, COUNT(*) as count FROM users
UNION ALL
SELECT 'Vendors' as table_name, COUNT(*) as count FROM vendors
UNION ALL
SELECT 'Connections' as table_name, COUNT(*) as count FROM vendor_connections
UNION ALL
SELECT 'Sessions' as table_name, COUNT(*) as count FROM search_sessions;