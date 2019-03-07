class GroupsController < ApplicationController

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def edit
    @group = Group.find(params[:id])

    # binding.pry
    # ☆現状はここは保留
    # if @group.save
    #   respond_to do |format|
    #     # format.html { redirect_to group_messages_path(@group), notice: 'メッセージが送信されました' }
    #     format.html { redirect_to root_path, notice: 'グループを作成しました' }
    #     format.json
    #   end
    # else
    #   flash.now[:alert] = 'メッセージを入力してください。'
    #   render :index
    # end

  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end

  end



  private

  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

end
