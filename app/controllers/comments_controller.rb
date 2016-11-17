class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end
  def create
    @comment = Comment.new(comment_params)
    @comment.post_id = params[:post_id]
    respond_to do |format|
      if @comment.save
        format.html {redirect_to posts_path}
        format.json { render json: @comment }
      else
        format.html {render :new}
      end
    end
  end

  def show
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
