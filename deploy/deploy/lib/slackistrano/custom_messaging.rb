module Slackistrano
  class CustomMessaging < Messaging::Base

    def channels_for(action)
      super
    end

    def playload_for_starting

    end
    # Suppress updating message.
    def payload_for_updating
      nil
    end

    # Suppress reverting message.
    def payload_for_reverting
      nil
    end

    # Fancy updated message.
    # See https://api.slack.com/docs/message-attachments
    def payload_for_updated
      {
        attachments: [{
          color: 'good',
          title: "#{application} - #{stage}",
          text: "branch #{branch} deployed by #{deployer} in #{elapsed_time} min",
          mrkdwn: true,
          fallback: super[:text]
        }]
      }
    end

    # Default reverted message.  Alternatively simply do not redefine this
    # method.
    def payload_for_reverted
      super
    end

    # Slightly tweaked failed message.
    # See https://api.slack.com/docs/message-formatting
    def payload_for_failed
      {
        attachments: [{
          color: 'danger',
          title: "#{application} - #{stage}",
          text: "deploy of #{branch} failed by #{deployer} in #{elapsed_time} min",
          mrkdwn: true,
          fallback: super[:text]
        }]
      }
    end

    # Override the deployer helper to pull the full name from the password file.
    # See https://github.com/phallstrom/slackistrano/blob/master/lib/slackistrano/messaging/helpers.rb
    def deployer
      "@#{`whoami`.strip}"
    end
    def username
      'deploy'
    end
    def icon_url
      'http://icons.iconarchive.com/icons/icons8/android/32/Clothing-Baseball-Cap-icon.png'
    end
  end
end