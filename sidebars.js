/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "auto/welcome",
    {
      Contribute: ["auto/Sharing_is_caring", "auto/Contribute"],
      Fundamentals: [
        "auto/DeFiChain",
        "auto/Original_White_Paper",
        "auto/Updated_White_Paper",
        "auto/Pink_Paper",
        "auto/Liquidity_Mining",
        "auto/Block_Rewards",
        "auto/Liquidity_Mining_versus_Staking",
        "auto/Impermanent_Loss",
        "auto/FAQ",
        "auto/Ecosystem",
        "auto/Decentralized_Assets",
        "auto/DEX",
        "auto/DEX_Fee_Structure",
        "auto/Liquidity_Token",
        "auto/Staking",
        "auto/Target_multiplier",
        "auto/Tradable_dAssets_on_DeFiChain",
        "auto/Lightwallet_change_Ocean",
        "auto/CustomTransaction",
      ],
      Guides: [
        "auto/Beginners_Guide",
        "auto/DeFiChain_Advanced_Tutorial",
        "auto/DeFiChain_Basics_Tutorial",
        "auto/DeFiChain_Intermediate_Tutorial",
        "auto/DeFiChain_Tutorials",
        "auto/Jellyfish_tutorial",
      ],
      "DeFi Wallet": [
        {
          Installation: [
            "auto/App_on_Windows_Cloud_Server",
            "auto/App_on_Raspberry-Pi",
            "auto/Saiivelive",
          ],
          Security: [
            "auto/Wallet_Encryption",
            "auto/Backup_Wallet",
            "auto/Restore_Wallet",
            "auto/Password_Setting",
          ],
          Usage: [
            "auto/Create_address",
            "auto/Listaccounts",
            "auto/Suggestion_for_using_the_DeFi_app",
            "auto/Masternode",
            "auto/Payout_DFI_in_Euro",
            "auto/Send_all_coins",
          ],
          "Advanced Usage": [
            "auto/API",
            "auto/CLI_Commands",
            "auto/Bitcoin_Anchoring",
            "auto/Blockchain_folder",
            "auto/Dual_setup_App_and_Node",
            "auto/Fullnode",
            "auto/Criticism",
            "auto/Masternode_installation_extended",
            "auto/Read_out_private_key",
            "auto/Import_BTC_private_key_to_Electrum",
            "auto/Atomic_Swap",
          ],
          Problems: [
            "auto/Debug.log",
            "auto/DeFi_Wallet_error_messages",
            "auto/DeFi_Wallet_errors",
            "auto/Show_hidden_folders",
            "auto/Unable_to_start_blockchain",
            "auto/App_Sync_Boost",
            "auto/corrupt_salvage_failed",
            "auto/Delete_DeFi_App",
            "auto/Kill_defid_Daemon",
            "auto/Sync_stops",
            "auto/How_to_rescue_stuck_DFI",
            "auto/Delete_dot_defi",
            "auto/Collected_questions_for_the_developers",
          ],
          "Version Specific Hints": ["auto/V2.3.1", "auto/V2.3.2"],
        },
      ],
      Community: [
        "auto/Improvement_Proposals",
        "auto/Community_Funding_Proposals",
        "auto/Taxes",
        "auto/Services",
        "auto/DeFiChain_ecosystem",
        "auto/DeFiChain-Masternode-Monitor",
        "auto/DeFiChain-Portfolio",
        "auto/Punks",
        "auto/Masternode-Tracking-Google-Sheet",
        "auto/Masternode_service",
        {
          DFX: [
            "auto/DFI_Staking_at_DFX",
            "auto/DFX_FAQ",
            "auto/DFX_manual_registration",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
